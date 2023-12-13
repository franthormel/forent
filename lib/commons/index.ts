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
    if (typeof input === "string" && input.length > 0) {
      return parseInt(input);
    }

    if (typeof input === "number" && Number.isInteger(input)) {
      return input;
    }

    return defaultValue;
  }
}
