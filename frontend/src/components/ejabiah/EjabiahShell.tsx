import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import styles from './EjabiahShell.module.css';

type QuickAction = { id: string; title: string; description: string; icon: 'book' | 'gear' | 'laptop'; prompt: string };

interface EjabiahShellProps {
  children: ReactNode;
  userName?: string;
  userRole?: string;
  notificationCount?: number;
  isConversationActive?: boolean;
  onNewChat?: () => void;
  onQuickAction?: (prompt: string) => void;
  onSignOut?: () => void;
}

const actions: QuickAction[] = [
  { id: 'policies', title: 'Company Policies', description: 'Find approved policies, guidelines and internal regulations.', icon: 'book', prompt: 'Show me the company policies I can search.' },
  { id: 'procedures', title: 'Ask About Procedures', description: 'Get clear, step-by-step guidance on internal procedures.', icon: 'gear', prompt: 'Help me find an internal company procedure.' },
  { id: 'support', title: 'IT & Technical Support', description: 'Get assistance with systems, access and technical issues.', icon: 'laptop', prompt: 'I need IT and technical support.' },
];

export function EjabiahShell({
  children,
  userName = 'Adil AlAmmari',
  userRole = 'IT Manager',
  notificationCount = 0,
  isConversationActive = false,
  onNewChat,
  onQuickAction,
  onSignOut,
}: EjabiahShellProps) {
  const [active, setActive] = useState('home');
  const [collapsed, setCollapsed] = useState(false);
  const [showChat, setShowChat] = useState(isConversationActive);
  const [homePrompt, setHomePrompt] = useState('');

useEffect(() => {
  setShowChat(isConversationActive);
}, [isConversationActive]);
  const initials = useMemo(() => userName.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase(), [userName]);

const navigate = (key: string) => {
  setActive(key);

  if (key === 'home') {
    setShowChat(false);
    return;
  }

  if (key === 'new-chat') {
    setShowChat(true);
    onNewChat?.();
  }
};

const openChatWithPrompt = (prompt: string) => {
  const value = prompt.trim();
  if (!value) return;

  setActive('new-chat');
  setShowChat(true);
  setHomePrompt('');
  onQuickAction?.(value);
};

  return (
    <div className={styles.shell}>
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
        <button className={styles.logoButton} onClick={() => setCollapsed((value) => !value)} aria-label="Toggle navigation">
          <img src="/images/Ejabiah_Mark-White_Gradient.png" alt="Ejabiah" />
        </button>
        <nav className={styles.nav} aria-label="Primary navigation">
          {[
            ['home', 'Home', 'home'],
            ['new-chat', 'New Chat', 'chat'],
            ['history', 'History', 'history'],
            ['bookmarks', 'Bookmarks', 'bookmark'],
            ['settings', 'Settings', 'settings'],
          ].map(([key, label, icon]) => (
            <button key={key} className={`${styles.navItem} ${active === key ? styles.active : ''}`} onClick={() => navigate(key)}>
              <Icon name={icon as 'home'} />
              {!collapsed && <span>{label}</span>}
            </button>
          ))}
        </nav>
        <button className={styles.help}><Icon name="help" />{!collapsed && <span>Help</span>}</button>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
  <div className={styles.profileCard}>
    <div className={styles.profileAvatar}>
      <span>{initials}</span>
      <i aria-hidden="true" />
    </div>

    <div className={styles.profileDetails}>
      <small>Welcome back,</small>
      <strong>{userName}</strong>
      <span>{userRole}</span>
    </div>
  </div>

  <div className={styles.topActions}>
    <button
      className={styles.iconButton}
      type="button"
      aria-label="Notifications"
    >
      <Icon name="bell" />
      {notificationCount > 0 && <b>{notificationCount}</b>}
    </button>

    <button
      className={styles.signOut}
      type="button"
      onClick={onSignOut}
    >
      <Icon name="signOut" />
      <span>Sign out</span>
    </button>
  </div>
</header>

        {!showChat  && (
          <section className={styles.dashboard}>
            <div className={styles.hero}>
              <div className={styles.heroGlow} />
              <div className={styles.brand}>
                <img src="/images/ai_logo.png" alt="Ejabiah AI" />
                
                <div><img src="/images/Ejabiah Short-White.png" alt="Ejabiah AI" /></div>
                <i />
                <b>AI</b>
              </div>
            </div>
            <div className={styles.welcome}><h1>Welcome to <span>Ejabiah AI</span></h1><p>Secure Enterprise AI Assistant</p></div>
            <div className={styles.cards}>
              {actions.map((action) => <button key={action.id} onClick={() => openChatWithPrompt(action.prompt)} className={styles.card}><span><Icon name={action.icon} /></span><h2>{action.title}</h2><p>{action.description}</p><i>→</i></button>)}
            </div>
            <div className={styles.trust}>
              {[
                ['shield', 'Secure & Trusted', 'Enterprise-grade security'],
                ['lock', 'Private & Confidential', 'Protected company knowledge'],
                ['cpu', 'AI Powered', 'Smart, fast and grounded'],
                ['check', 'Always Available', 'Ready when employees need it'],
              ].map(([icon, title, subtitle]) => <div key={title}><Icon name={icon as 'shield'} /><span><strong>{title}</strong><small>{subtitle}</small></span></div>)}
            </div>
            

<form
  className={styles.homeComposer}
  onSubmit={(event) => {
    event.preventDefault();
    openChatWithPrompt(homePrompt);
  }}
>
  <div className={styles.composerAiIcon}>
    <Icon name="cpu" />
  </div>

  <input
    value={homePrompt}
    onChange={(event) => setHomePrompt(event.target.value)}
    placeholder="Ask Ejabiah AI anything..."
    aria-label="Ask Ejabiah AI"
  />

  <button
    type="submit"
    className={styles.composerSend}
    disabled={!homePrompt.trim()}
    aria-label="Send message"
  >
    <Icon name="send" />
  </button>
</form>
          </section>
        )}

        {showChat && (
  <section className={`${styles.chatHost} ${styles.chatActive}`}>
    {children}
  </section>
)}
      </main>
    </div>
  );
}
