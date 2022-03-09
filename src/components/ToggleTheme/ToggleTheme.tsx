import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/ToggleTheme/ToggleTheme.scss';
import Theme from '@/constants/theme';
import useTheme from '@/hooks/use-theme';

const ToggleTheme: FunctionComponent = (): JSX.Element => {
  const { theme, onToggle } = useTheme();
  return (
    <div className={styles['switch_container']}>
      <div className={styles['switch_text']}>{theme}</div>
      <div className={styles['switch_box']}>
        <input
          type="checkbox"
          checked={theme === Theme.DARK}
          onChange={onToggle}
          className={styles['switch']}
        />
      </div>
    </div>
  );
};

export default ToggleTheme;
