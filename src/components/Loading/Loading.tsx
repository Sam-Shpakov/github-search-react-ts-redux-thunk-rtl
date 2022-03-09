import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/Loading/Loading.scss';
import LoadingIcon from '@/components/icons/LoadingIcon';

const Loading: FunctionComponent = (): JSX.Element => (
  <div className={styles['loading-container']}>
    <LoadingIcon className={styles['loading-icon']} />
  </div>
);

export default Loading;
