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
    <Link to={`/${data.login}`} className={styles['card-link']}>
      <img className={styles['card-avatar']} src={data.avatarUrl} alt="Avatar" />{' '}
    </Link>
    <div className={styles['card-text']}>
      <div className={styles['card-p']}>
        <span className={styles['card-name']}>Name:</span>
        <Link to={`/user_${data.login}`} className={styles['card-link']}>
          {data.name}
        </Link>
      </div>
      <div className={styles['card-p']}>
        <span className={styles['card-name']}>Username:</span>
        <Link to={`/user_${data.login}`} className={styles['card-link']}>
          {data.login}
        </Link>
      </div>
      <div className={styles['card-p']}>
        <span className={styles['card-name']}>Biography:</span>
        <Link to={`/user_${data.login}`} className={styles['card-link']}>
          {data.bio}
        </Link>
      </div>
    </div>
  </div>
);

export default CardUser;
