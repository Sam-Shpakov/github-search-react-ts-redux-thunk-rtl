import { useParams } from 'react-router-dom';

import React from 'react';

import Header from '@/components/Header';
import styles from '@/pages/UserPage/UserPage.scss';

const UserPage = (): JSX.Element => {
  const { nickname } = useParams();
  return (
    <div className={styles['second-container']}>
      <Header />
      <div className={styles['second-content']}>Page {nickname}</div>
    </div>
  );
};
export default UserPage;
