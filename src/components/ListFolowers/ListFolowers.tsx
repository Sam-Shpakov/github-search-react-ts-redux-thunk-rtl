import React from 'react';
import type { FunctionComponent } from 'react';

import CardFolower from '@/components/CardFolower';
import CustomizedScrollBar from '@/components/CustomizedScrollBar';
import styles from '@/components/ListFolowers/ListFolowers.scss';
import type { TFollowers } from '@/types/userStore';

export interface ListFolowersProps {
  data: TFollowers[];
}

const ListFolowers: FunctionComponent<ListFolowersProps> = ({ data }): JSX.Element => (
  <div className={styles['folowers-container']}>
    <div className={styles['folowers-header']}>folowers</div>
    <CustomizedScrollBar>
      {data.map(item => (
        <div className={styles['folowers-item']} key={item.id}>
          <CardFolower data={item} />
        </div>
      ))}
    </CustomizedScrollBar>
  </div>
);

export default ListFolowers;
