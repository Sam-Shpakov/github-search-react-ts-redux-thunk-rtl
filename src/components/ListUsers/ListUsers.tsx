import React from 'react';
import type { FunctionComponent } from 'react';

import CardUser from '@/components/CardUser';
import CustomizedScrollBar from '@/components/CustomizedScrollBar';
import styles from '@/components/ListUsers/ListUsers.scss';
import { TData } from '@/types/mainStore';

export interface ListUsersProps {
  data: TData[];
}

const ListUsers: FunctionComponent<ListUsersProps> = ({ data }): JSX.Element => (
  <div className={styles['list-container']}>
    <CustomizedScrollBar>
      {data.map(item => (
        <div className={styles['list-item']} key={item.id}>
          <CardUser data={item} />
        </div>
      ))}
    </CustomizedScrollBar>
  </div>
);

export default ListUsers;
