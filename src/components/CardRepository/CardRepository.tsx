import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/CardRepository/CardRepository.scss';
import ForkIcon from '@/components/icons/ForkIcon';
import RepositroryIcon from '@/components/icons/RepositroryIcon';
import StarIcon from '@/components/icons/StarIcon';
import type { TRepositories } from '@/types/userStore';

export interface CardRepositoryProps {
  data: TRepositories;
}

const CardRepository: FunctionComponent<CardRepositoryProps> = ({ data }): JSX.Element => (
  <div className={styles['card-container']}>
    <div className={styles['card-names']}>
      {data.url && (
        <div className={styles['card-name']}>
          <RepositroryIcon size="md" />
          <a className={styles['card-link']} href={data.url}>
            {data.name}
          </a>
          {data.isFork && '(fork)'}
        </div>
      )}
      <div className={styles['card-description']}>{data.description}</div>
      <div className={styles['card-details']}>
        {data.stargazerCount !== undefined && (
          <div className={styles['card-detail']}>
            <StarIcon size="sm" />
            {data.stargazerCount}
          </div>
        )}
        {data.stargazerCount !== undefined && (
          <div className={styles['card-detail']}>
            <ForkIcon size="sm" />
            {data.forkCount}
          </div>
        )}
        <div className={styles['card-detail']}>{data.primaryLanguage}</div>
        <div className={styles['card-detail']}>{data.licenseInfo}</div>
        <div className={styles['card-detail']}>{data.pushedAt}</div>
      </div>
    </div>
  </div>
);

export default CardRepository;
