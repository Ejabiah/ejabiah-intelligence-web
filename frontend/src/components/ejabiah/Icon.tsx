import type { ReactElement } from 'react';

type IconName = 'home' | 'chat' | 'history' | 'bookmark' | 'settings' | 'help' | 'bell' | 'signOut' | 'book' | 'gear' | 'laptop' | 'shield' | 'lock' | 'cpu' | 'check' | 'menu' | 'send';

const paths: Record<IconName, ReactElement> = {
  home: <><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></>,
  chat: <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z"/>,
  history: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
  bookmark: <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3.2V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 10h.2a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
  help: <><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
  signOut: <><path d="M10 17v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1"/><path d="M3 12h13"/><path d="m11 8 4 4-4 4"/></>,
  book: <path d="M12 6.5C10.5 5 8 4 4 4v14c4 0 6.5 1 8 2.5M12 6.5C13.5 5 16 4 20 4v14c-4 0-6.5 1-8 2.5"/>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></>,
  laptop: <><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 20h20"/></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  lock: <><rect x="4" y="11" width="16" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  cpu: <><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
send: (
  <>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    <path d="M22 2 11 13" />
  </>
),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
