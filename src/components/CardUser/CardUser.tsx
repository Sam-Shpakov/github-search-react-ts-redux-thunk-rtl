import { Link } from 'react-router-dom';

import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/CardUser/CardUser.scss';
import { TData } from '@/types/mainStore';

export interface ListUsersProps {
  data: TData;
}

const CardUser: FunctionComponent<ListUsersProps> = ({ data }): JSX.Element => (
  <div className={styles['card-container']}>
    <Link to={`/user_${data.login}`} className={styles['card-logo']}>
      <img className={styles['card-avatar']} src={data.avatarUrl} alt="Avatar" />{' '}
    </Link>
    <div className={styles['card-text']}>
      <div className={styles['card-names']}>
        <div className={styles['card-name']}>
          <Link to={`/user_${data.login}`} className={styles['card-link']}>
            {data.name}
          </Link>
        </div>
        <div className={styles['card-username']}>
          <Link to={`/user_${data.login}`} className={styles['card-link']}>
            {data.login}
          </Link>
        </div>
      </div>
      <div className={styles['card-detail']}>
        <Link to={`/user_${data.login}`} className={styles['card-link']}>
          {data.bio}
        </Link>
      </div>
    </div>
  </div>
);

export default CardUser;
