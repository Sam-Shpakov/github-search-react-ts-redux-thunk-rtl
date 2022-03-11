import type { TFetchData, TData, TFollowers, TRepositories } from '@/types/userStore';
import { formatDate } from '@/utils/date-format';

const formatServerDataToData = (data: TFetchData): TData => {
  const newfollowers: TFollowers[] = data.followers.edges.map(item => ({
    id: item.node.id,
    name: item.node.name,
    login: item.node.login,
    avatarUrl: item.node.avatarUrl,
  }));
  const newRepository: TRepositories[] = data.repositories.edges
    .filter(item => data.id === item.node.owner.id)
    .map(item => ({
      name: item.node.name,
      description: item.node.description,
      url: item.node.url,
      isFork: item.node.isFork,
      forkCount: item.node.forkCount,
      stargazerCount: item.node.stargazerCount,
      pushedAt: formatDate(item.node.pushedAt),
      licenseInfo: item.node.licenseInfo?.name,
      primaryLanguage: item.node.primaryLanguage?.name,
    }));

  const formatData: TData = {
    ...data,
    followersCount: data.followers.totalCount,
    followers: newfollowers,
    followingCount: data.following.totalCount,
    repositoriesCount: newRepository.length,
    repositories: newRepository,
  };

  return formatData;
};

export { formatServerDataToData };
