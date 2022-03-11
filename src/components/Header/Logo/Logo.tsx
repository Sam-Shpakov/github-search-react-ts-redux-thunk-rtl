import classNames from 'classnames';
import { Link } from 'react-router-dom';

import React, { memo } from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/Header/Logo/Logo.scss';
import LogoIcon from '@/components/icons/LogoIcon';

const LogoInner: FunctionComponent = (): JSX.Element => (
  <div className={styles['logo-container']}>
    <Link to="/" className={styles['logo-link']}>
      <LogoIcon className={classNames(styles['logo-icon'], styles['white'])} size="md" />
    </Link>
  </div>
);

const Logo = memo(LogoInner);

export default Logo;
