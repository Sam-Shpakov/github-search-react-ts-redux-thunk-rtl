import React from 'react';

import Header from '@/components/Header';
import styles from '@/pages/MainPage/MainPage.scss';
import useListData from '@/redux-folder/hooks';

const MainPage = (): JSX.Element => {
  const { dataMain } = useListData();

  if (dataMain.error) {
    return (
      <div className={styles['main-container']}>
        <Header isActive={[true, false]} />
        <div className={styles['main-content']}>
          <div className={styles['main-text']}>Error: {dataMain.error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['main-container']}>
      <Header isActive={[true, false]} />
      <div className={styles['main-content']}>
        {dataMain.loading ? (
          <div className={styles['main-text']}>Loading...</div>
        ) : (
          dataMain.data.map(item => <div key={item.id}>{item.name}</div>)
        )}
      </div>
    </div>
  );
};

export default MainPage;
