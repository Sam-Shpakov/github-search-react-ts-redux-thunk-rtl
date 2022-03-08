import classNames from 'classnames';
import { Link } from 'react-router-dom';

import React, { memo } from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import styles from '@/components/Header/Header.scss';

interface IHeaderInner extends HTMLAttributes<HTMLDivElement> {
  isActive: Array<boolean>;
}

const HeaderInner: FunctionComponent<IHeaderInner> = ({ isActive }): JSX.Element => (
  <div className={styles['header-container']}>
    <div className={styles['header-logo']}>Logo</div>
    <div className={styles['header-links']}>
      <Link
        to="/"
        className={classNames(
          styles['header-link'],
          isActive[0] ? styles['header-link-active'] : '',
        )}
      >
        Main
      </Link>
      <Link
        to="/second"
        className={classNames(
          styles['header-link'],
          isActive[1] ? styles['header-link-active'] : '',
        )}
      >
        Second
      </Link>
    </div>
  </div>
);

const Header = memo(HeaderInner);

export default Header;
