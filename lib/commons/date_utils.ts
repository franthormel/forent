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
   * @param custom Custom date of comparison (defaults to today)
   * @returns boolean
   */
  export function dateHasPassed(date: Date, custom?: Date): boolean {
    // Settle which date will be used for comparison (today or the given input)
    let referenceDate;
    if (custom === undefined) {
      referenceDate = new Date();
    } else {
      referenceDate = custom;
    }

    return date < referenceDate;
  }

  /**
   * Check if the given date is today or if equal to the given custom date
   * Timezone is taken into account.
   *
   * @param date Date to compare
   * @param today Today date (can provide a custom value, useful when client is from a different time zone)
   * @returns true if the given date is today or equal to the given custom date
   */
  export function dateIsToday(date: Date, today?: Date): boolean {
    let todayDate;
    if (today === undefined) {
      todayDate = new Date();
    } else {
      todayDate = today;
    }

    const sameYear = todayDate.getUTCFullYear() === date.getUTCFullYear();
    const sameMonth = todayDate.getUTCMonth() === date.getUTCMonth();
    const sameDay = todayDate.getUTCDate() === date.getUTCDate();
    const value = sameYear && sameMonth && sameDay;

    return value;
  }
}
