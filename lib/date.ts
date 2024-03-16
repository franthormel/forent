export function fetchToday(): Date {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return new Date(year, month, day);
}

// FUTURE: Make offset functions (for year, month, day)
export function fetchDateOneYearFromToday(): Date {
  const today = new Date();
  const year = today.getFullYear() + 1;
  const month = today.getMonth();
  const day = today.getDate();

  return new Date(year, month, day);
}
