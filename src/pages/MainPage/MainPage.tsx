import React from 'react';

import FormSearch from '@/components/FormSearch';
import Header from '@/components/Header';
import ListUsers from '@/components/ListUsers';
import Loading from '@/components/Loading';
import styles from '@/pages/MainPage/MainPage.scss';
import { useListData } from '@/redux-folder/hooks';

const MainPage = (): JSX.Element => {
  const { searchUsers, dataMain } = useListData();
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
        <FormSearch
          nameButton="Search"
          onSubmit={searchUsers}
          labelText="Search by username, full name, or email address"
        />
        {dataMain.loading ? <Loading /> : <ListUsers data={dataMain.data} />}
      </div>
    </div>
  );
};

export default MainPage;
