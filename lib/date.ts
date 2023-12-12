export function fetchDateToday(): Date {
  return new Date();
}

export function fetchDateOneYearFromToday(): Date {
  const date = new Date();
  const thisYear = date.getFullYear();
  date.setFullYear(thisYear + 1);
  return date;
}
