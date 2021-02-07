export function padWithZero(num) {
  return String(num).length === 1 ? `0${num}` : num;
}

export function getDateFromISODate(dateString) {
  const dateObj = new Date(dateString);

  return dateObj.toDateString();
}

export function getTimeFromISODate(dateString) {
  const dateObj = new Date(dateString);
  const hourValue = dateObj.getHours();
  const hour = padWithZero(hourValue);
  const minuteValue = dateObj.getMinutes();
  const minute = padWithZero(minuteValue);

  return `${hour}:${minute}`;
}
