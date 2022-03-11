import { Link } from 'react-router-dom';

import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/CardFolower/CardFolower.scss';
import type { TFollowers } from '@/types/userStore';

export interface ListUsersProps {
  data: TFollowers;
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
    </div>
  </div>
);

export default CardUser;
