import React from 'react';
import type { FunctionComponent } from 'react';

import styles from '@/components/HeaderUser/HeaderUser.scss';
import CompanyIcon from '@/components/icons/CompanyIcon';
import FolowersIcon from '@/components/icons/FolowersIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import RepositroryIcon from '@/components/icons/RepositroryIcon';
import UrlIcon from '@/components/icons/UrlIcon';
import type { TData } from '@/types/userStore';

export interface HeaderUserProps {
  data: TData;
}

const HeaderUser: FunctionComponent<HeaderUserProps> = ({ data }): JSX.Element => (
  <div className={styles['header-user-container']}>
    <a href={data.url}>
      <img className={styles['header-user-avatar']} src={data.avatarUrl} alt="Avatar" />{' '}
    </a>
    <div className={styles['header-user-info']}>
      <div className={styles['header-user-names']}>
        <div className={styles['header-user-name']}>
          <a href={data.url} className={styles['header-user-link']}>
            {data.name}
          </a>
        </div>
        <div className={styles['header-user-username']}>
          <a href={data.url} className={styles['header-user-link']}>
            {data.login}
          </a>
        </div>
      </div>
      <div className={styles['header-user-details']}>
        {data.company && (
          <div className={styles['header-user-detail']}>
            <CompanyIcon size="sm" />
            <span className={styles['header-user-detail-text']}>{data.company}</span>
          </div>
        )}
        {data.location && (
          <div className={styles['header-user-detail']}>
            <LocationIcon size="sm" />
            <span className={styles['header-user-detail-text']}>{data.location}</span>
          </div>
        )}
        {data.websiteUrl && (
          <div className={styles['header-user-detail']}>
            <UrlIcon size="sm" />
            <a className={styles['header-user-detail-link']} href={data.websiteUrl}>
              {data.websiteUrl}
            </a>
          </div>
        )}
        <div className={styles['header-user-detail']}>
          <FolowersIcon size="sm" />
          <span className={styles['header-user-detail-text']}>
            {data.followersCount} followers · {data.followingCount} following
          </span>
        </div>
        <div className={styles['header-user-detail']}>
          <RepositroryIcon size="sm" />
          <span className={styles['header-user-detail-text']}>
            {data.repositoriesCount} repositories
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderUser;
