import classNames from 'classnames';

import React from 'react';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import styles from '@/components/CustomizedScrollBar/CustomizedScrollBar.scss';

interface CustomizedScrollBarProps extends HTMLAttributes<HTMLDivElement> {
  direction?: string;
  children: ReactNode;
}

const CustomizedScrollBar: FunctionComponent<CustomizedScrollBarProps> = ({
  direction = 'right',
  children,
}): JSX.Element => (
  <div
    className={classNames(
      direction === 'right' && styles['scrollbar'],
      direction === 'left' && styles['scrollbar-left'],
    )}
  >
    <div className={styles['force-overflow']}>{children}</div>
  </div>
);

export default CustomizedScrollBar;
