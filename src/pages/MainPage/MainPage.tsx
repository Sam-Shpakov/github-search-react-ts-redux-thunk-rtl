import React from 'react';

import CustomizedScrollBar from '@/components/CustomizedScrollBar';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import styles from '@/pages/MainPage/MainPage.scss';
import useListData from '@/redux-folder/hooks';

const MainPage = (): JSX.Element => {
  const { dataMain } = useListData();

  if (dataMain.error) {
    return (
      <div className={styles['main-container']}>
        <Header />
        <div className={styles['main-content']}>
          <div className={styles['main-text']}>Error: {dataMain.error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles['main-content']}>
        <CustomizedScrollBar>
          {dataMain.loading ? (
            <Loading />
          ) : (
            dataMain.data.map(item => (
              <div className={styles['main-text']} key={item.id}>
                {item.name}
              </div>
            ))
          )}
        </CustomizedScrollBar>
      </div>
    </div>
  );
};

export default MainPage;
