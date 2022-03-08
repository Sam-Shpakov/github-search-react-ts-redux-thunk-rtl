interface IGetUrl {
  uri: string;
}

const getUrl = (): IGetUrl => {
  const uri = 'https://reqres.in/api/users?per_page=12';
  return { uri };
};

export { getUrl };
