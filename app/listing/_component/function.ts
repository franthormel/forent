import { DateUtils } from "../../../lib/commons/date_utils";

/**
 * Display proper text if the given listing's date is considered available
 *
 * @param availableDate Listing availability date
 * @param customToday Custom today 
 * @returns "Available Now" if it is available otherwise the localized date
 */
export function availableDateText(
  availableDate: Date | null,
  customToday?: Date
) {
  // Listing is considered available if ...
  const text = "Available Now";

  // ... if its null or ...
  if (availableDate === null) {
    return text;
  }

  // ... given date already passed.
  let today;
  if (customToday === undefined) {
    today = new Date();
  } else {
    today = customToday;
  }
  const isPastDate = DateUtils.dateHasPassed(availableDate, today);
  const isToday = DateUtils.dateIsToday(availableDate, today);
  if (isPastDate || isToday) {
    return text;
  }

  // FUTURE: Localize, put in env
  return new Intl.DateTimeFormat("en-PH", {
    dateStyle: "long",
    timeZone: "Asia/Manila",
  }).format(availableDate);
}
