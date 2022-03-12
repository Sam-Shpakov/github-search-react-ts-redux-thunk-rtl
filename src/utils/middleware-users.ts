import type { TFetchData, TData } from '@/types/mainStore';

const formatServerUsersDataToData = (data: TFetchData[]): TData[] => {
  /* eslint no-underscore-dangle: 0 */
  const formatData: TData[] = data
    .filter(item => item.__typename === 'User')
    .map(item => ({
      id: item.id,
      name: item.name,
      login: item.login,
      avatarUrl: item.avatarUrl,
      url: item.url,
      bio: item.bio,
    }));
  return formatData;
};

export { formatServerUsersDataToData };
