const formatISOToDate = (time: string) => {
  const result = new Date(Date.parse(time));
  return result;
};

const format = (date: number) => (date < 10 ? `0${date}` : `${date}`);

const formatDate = (time: string) => {
  const date = formatISOToDate(time);
  return (
    `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}` +
    ` ${format(date.getDate())}.${format(date.getMonth() + 1)}.${format(date.getFullYear())}`
  );
};

export { formatDate };
