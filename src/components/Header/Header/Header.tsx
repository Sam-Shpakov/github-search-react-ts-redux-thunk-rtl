import React, { memo } from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/Header/Header/Header.scss';
import Logo from '@/components/Header/Logo';
import ToggleTheme from '@/components/ToggleTheme';

const HeaderInner: FunctionComponent = (): JSX.Element => (
  <div className={styles['header-container']}>
    <Logo />
    <div className={styles['header-text']}>GitHub Search</div>
    <ToggleTheme />
  </div>
);

const Header = memo(HeaderInner);

export default Header;
