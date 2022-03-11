import { useParams } from 'react-router-dom';

import React, { Fragment } from 'react';

import Header from '@/components/Header';
import HeaderUser from '@/components/HeaderUser';
import ListFolowers from '@/components/ListFolowers';
import ListRepositories from '@/components/ListRepositories';
import Loading from '@/components/Loading';
import styles from '@/pages/UserPage/UserPage.scss';
import { useUserData } from '@/redux-folder/hooks';

const UserPage = (): JSX.Element => {
  const { nickname } = useParams();
  const username = nickname || '';
  const { userData } = useUserData(username);
  if (userData.error) {
    return (
      <div className={styles['user-container']}>
        <Header />
        <div className={styles['user-content']}>
          <div className={styles['user-text']}>Error: {userData.error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['user-container']}>
      <Header />
      <div className={styles['user-content']}>
        {userData.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <HeaderUser data={userData.data} />
            <div className={styles['user-body']}>
              {userData.data.followers && <ListFolowers data={userData.data.followers} />}
              {userData.data.repositories && <ListRepositories data={userData.data.repositories} />}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default UserPage;
