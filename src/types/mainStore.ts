export enum MainConstantTypes {
  GET_DATA_LOADING = 'GET_DATA_LOADING',
  GET_DATA_ERROR = 'GET_DATA_ERROR',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
}

export interface IStateMain {
  error: string;
  loading: boolean;
  data: TData[];
}

export interface IResponse {
  data: FetchData[];
}

export type FetchData = {
  id: string;
  first_name: string;
  last_name: string;
};

export type TData = {
  id: string;
  name: string;
};

export type MainAction = {
  type: string;
  payload: IStateMain;
};

export interface ISetLoadingAction {
  type: MainConstantTypes.GET_DATA_LOADING;
}

export interface ISetErrorgAction {
  type: MainConstantTypes.GET_DATA_ERROR;
  error: string;
}

export interface ISetSuccessAction {
  type: MainConstantTypes.GET_DATA_SUCCESS;
  payload: TData[];
}

export type MainActionTypes = ISetLoadingAction | ISetErrorgAction | ISetSuccessAction;
