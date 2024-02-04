/**
 * Numeric input processing utility
 */
export namespace NumberUtils {
  /**
   * Safely convert the input into a number
   *
   * @param input Input value
   * @param defaultValue Default value to be returned if input is not a number
   * @returns conversion
   */
  export function toNumber(
    input: string | number | undefined,
    defaultValue: number
  ): number {
    // Number ...
    if (typeof input === "number" && Number.isInteger(input)) {
      return input;
    }

    // ... string ...
    if (typeof input === "string") {
      const parsed = parseInt(input);

      if (Number.isInteger(parsed)) {
        return parsed;
      } else {
        return defaultValue;
      }
    }

    // ... NaN, undefined, others
    return defaultValue;
  }
}
