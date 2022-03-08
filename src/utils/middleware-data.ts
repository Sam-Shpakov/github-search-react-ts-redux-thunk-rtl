import { FetchData, TData } from '@/types/mainStore';

const formatServerDataToData = (data: FetchData[]): TData[] =>
  data.map(item => ({
    id: item.id,
    name: `${item.first_name} ${item.last_name}`,
  }));

export { formatServerDataToData };
