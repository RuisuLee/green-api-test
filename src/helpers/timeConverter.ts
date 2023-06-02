export const timeConverter = (UNIX_timestamp: number) => {
  const a = new Date(UNIX_timestamp);
  const hour = a.getHours();
  const minutes = a.getMinutes();
  const min = minutes < 10 ? `0${minutes}` : minutes;
  const time = hour + ":" + min;
  return time;
};
