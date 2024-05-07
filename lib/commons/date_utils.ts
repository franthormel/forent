export namespace DateUtils {
  /**
   * Offsets the date using the year value
   *
   * @param date Date
   * @param year offset value for the year (could be positive or negative)
   * @returns Date with its ofsetted year
   */
  export function offsetYear(date: Date, year: number): Date {
    const copy = new Date(date);
    const yearOffset = copy.getFullYear() + year;
    copy.setFullYear(yearOffset);
    return copy;
  }

  /**
   * Checks if the given date has passed.
   * Will compare with today if custom date is not provided.
   * Will compare with the given custom date, if provided.
   * Timezone is taken into account.
   *
   * @param date Date to compare
   * @param customToday Custom today date. Useful when client & server resides in different time zones.
   * @returns boolean
   */
  export function dateHasPassed(date: Date, customToday?: Date): boolean {
    // Settle which date will be used for comparison (today or the given input)
    let referenceDate;
    if (customToday === undefined) {
      referenceDate = new Date();
    } else {
      referenceDate = customToday;
    }

    return date < referenceDate;
  }

  /**
   * Check if the given date is today or if equal to the given custom date
   * Timezone is taken into account.
   *
   * @param date Date to compare
   * @param customToday Custom today date. Useful when client & server resides in different time zones.
   * @returns true if the given date is today or equal to the given custom date
   */
  export function dateIsToday(date: Date, customToday?: Date): boolean {
    let todayDate;
    if (customToday === undefined) {
      todayDate = new Date();
    } else {
      todayDate = customToday;
    }

    const sameYear = todayDate.getUTCFullYear() === date.getUTCFullYear();
    const sameMonth = todayDate.getUTCMonth() === date.getUTCMonth();
    const sameDay = todayDate.getUTCDate() === date.getUTCDate();
    const value = sameYear && sameMonth && sameDay;

    return value;
  }

  /**
   * Returns date in `YYYY-MM-DD` format.
   * Only suitable when the given date is originates from the client.
   *
   * @param date Date, preferably from the client side otherwise other effects will occur.
   */
  export function formatDate(date: Date): string {
    // NOTE: Read for more info https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    const isoFormat = date.toISOString();
    const value = isoFormat.slice(0, 10);
    return value;
  }
}
