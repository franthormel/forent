export function fetchDateToday(): Date {
  return new Date();
}

// TODO: Make offset functions (for year, month, day)
export function fetchDateOneYearFromToday(): Date {
  const date = new Date();
  const thisYear = date.getFullYear();
  date.setFullYear(thisYear + 1);
  return date;
}
