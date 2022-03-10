import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/CardUser/CardUser.scss';
import { TData } from '@/types/mainStore';

export interface ListUsersProps {
  data: TData;
}

const CardUser: FunctionComponent<ListUsersProps> = ({ data }): JSX.Element => (
  <div className={styles['card-container']}>{data.name}</div>
);

export default CardUser;
