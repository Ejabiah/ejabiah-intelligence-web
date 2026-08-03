import React from 'react';
import { Caption1Strong } from '@fluentui/react-components';
import styles from './BuiltWithBadge.module.css';

interface BuiltWithBadgeProps {
  className?: string;
}

export const BuiltWithBadge: React.FC<BuiltWithBadgeProps> = ({ className }) => {
  return (
    <div
      className={`${styles.badge} ${className || ''}`}
      aria-label="Ejabiah AI"
    >
      <Caption1Strong className={styles.brand}>
        Ejabiah AI
      </Caption1Strong>

      <Caption1Strong className={styles.text}>
        Secure Enterprise Intelligence
      </Caption1Strong>
    </div>
  );
};