import React from 'react';

import Header from '@/components/Header';
import styles from '@/pages/SecondPage/SecondPage.scss';

const SecondPage = (): JSX.Element => (
  <div className={styles['second-container']}>
    <Header isActive={[false, true]} />
    <div className={styles['second-content']}>Second Page</div>
  </div>
);
export default SecondPage;
