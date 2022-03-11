export enum UserConstantTypes {
  GET_DATA_LOADING = 'GET_DATA_USER_LOADING',
  GET_DATA_ERROR = 'GET_DATA_USER_ERROR',
  GET_DATA_SUCCESS = 'GET_DATA_USER_SUCCESS',
}

export interface IStateUser {
  error: string;
  loading: boolean;
  data: TData;
}

export type UserAction = {
  type: string;
  payload: IStateUser;
};

export interface ISetLoadingAction {
  type: UserConstantTypes.GET_DATA_LOADING;
}

export interface ISetErrorgAction {
  type: UserConstantTypes.GET_DATA_ERROR;
  error: string;
}

export interface ISetSuccessAction {
  type: UserConstantTypes.GET_DATA_SUCCESS;
  payload: TData;
}

export type UserActionTypes = ISetLoadingAction | ISetErrorgAction | ISetSuccessAction;

export type TResponce = {
  data: TResponceUser;
};

export type TResponceUser = {
  user: TFetchData;
};

export type TFetchData = {
  id: string;
  avatarUrl: string;
  name: string;
  login: string;
  location: string;
  company: string;
  bio: string;
  websiteUrl: string;
  url: string;
  followers: TFetchFollowers;
  following: TFollowing;
  repositories: TFetchRepositories;
};

export type TFetchFollowers = {
  totalCount: number;
  edges: TFetchFollowersNodes[];
};

export type TFetchFollowersNodes = {
  node: TFollowers;
};

export type TFetchRepositories = {
  totalCount: number;
  edges: TFetchRepositoriesNodes[];
};

export type TFetchRepositoriesNodes = {
  node: TFetchRepositoriesNode;
};

export type TFetchRepositoriesNode = {
  name: string;
  owner: { id: string };
  description: string;
  url: string;
  isFork: boolean;
  forkCount: number;
  stargazerCount: number;
  pushedAt: string;
  licenseInfo: { name: string };
  primaryLanguage: { name: string };
};

export type TData = {
  id: string;
  avatarUrl: string;
  name: string;
  login: string;
  location: string;
  company: string;
  bio: string;
  websiteUrl: string;
  url: string;
  followersCount: number;
  followers: TFollowers[];
  followingCount: number;
  repositoriesCount: number;
  repositories: TRepositories[];
};

export type TFollowers = {
  id: string;
  name: string;
  login: string;
  avatarUrl: string;
};

export type TFollowing = {
  totalCount: number;
};

export type TRepositories = {
  name: string;
  description: string;
  url: string;
  isFork: boolean;
  forkCount: number;
  stargazerCount: number;
  pushedAt: string;
  licenseInfo: string;
  primaryLanguage: string;
};
