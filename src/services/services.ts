import { getUrl } from '@/utils/get-url';

const { uri } = getUrl();

async function fetchData<T> (): Promise<T> {
  const response = await fetch(uri);
  if (response.ok) return response.json() as Promise<T>;

  if (response.status === 400) {
    const error: IError = { message: 'Сервер не доступен' };
    return Promise.reject(error);
  }
  const error: IError = {
    message: `Ответ с сервера статус  ${response.status}(${response.statusText})`,
  };
  return Promise.reject(error);
}

export default fetchData;
