export function fetchDateToday(): string {
  const today = new Date();
  // Turn into YYYY-MM-DD format
  return today.toISOString().substring(0, 10);
}

export function fetchDateOneYearFromToday(): string {
  const today = new Date();
  const thisYear = today.getFullYear();
  today.setFullYear(thisYear + 1);
  // Turn into YYYY-MM-DD format
  return today.toISOString().substring(0, 10);
}
