import styles from "./AgentIcon.module.css";
import { Bot24Regular } from "@fluentui/react-icons";

interface AgentIconProps {
  alt?: string;
  size?: "small" | "medium" | "large";
  logoUrl?: string;
}

export function AgentIcon({
  alt = "Ejabiah AI",
  size = "medium",
  logoUrl,
}: AgentIconProps) {
  const sizeClass = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <div
      className={`${styles.agentAvatar} ${sizeClass[size]}`}
      aria-label={alt}
      title={alt}
    >
      {logoUrl ? (
        <img src={logoUrl} alt={alt} />
      ) : (
        <Bot24Regular />
      )}
    </div>
  );
}