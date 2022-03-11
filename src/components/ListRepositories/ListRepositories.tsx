import React from 'react';
import type { FunctionComponent } from 'react';

import CardRepository from '@/components/CardRepository';
import CustomizedScrollBar from '@/components/CustomizedScrollBar';
import styles from '@/components/ListRepositories/ListRepositories.scss';
import type { TRepositories } from '@/types/userStore';

export interface ListRepositoriesProps {
  data: TRepositories[];
}

const ListRepositories: FunctionComponent<ListRepositoriesProps> = ({ data }): JSX.Element => (
  <div className={styles['repositories-container']}>
    <div className={styles['repositories-header']}>repositories</div>
    <div className={styles['repositories-list']}>
      <CustomizedScrollBar>
        {data.map(item => (
          <div className={styles['repositories-item']} key={item.name}>
            <CardRepository data={item} />
          </div>
        ))}
      </CustomizedScrollBar>
    </div>
  </div>
);

export default ListRepositories;
