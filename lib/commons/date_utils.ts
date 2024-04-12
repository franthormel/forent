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
}
