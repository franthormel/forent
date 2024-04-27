import { DateUtils } from "../../../lib/commons/date_utils";

/**
 * Display proper text if the given listing's date is considered available
 *
 * @param availableDate Listing availability date
 * @returns "Available Now" if it is available otherwise the localized date
 */
export function availableDateText(availableDate: Date | null) {
  // Listing is considered available if ...
  const text = "Available Now";

  // ... if its null or ...
  if (availableDate === null) {
    return text;
  }

  // ... given date already passed.
  const today = new Date();
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
