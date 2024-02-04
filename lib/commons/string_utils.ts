/**
 * String processing utility
 */
export namespace StringUtils {
  /**
   * Checks if the input has a value
   *
   * @param input Input value
   * @returns true if there is, otherwise false
   */
  export function checkInput(input: string | undefined): boolean {
    return typeof input === "string" && input.length > 0;
  }
}
