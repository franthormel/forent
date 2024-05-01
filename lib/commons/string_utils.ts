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

  /**
   * Returns the pluralizedd appending text with the number of items.
   * Example: 12 items, 4 apples, or 1 dog.
   *
   * Does not work well with irregular nouns like:
   * children, cacti, mice, men, women, etc.
   *
   * @param count Item(s) count
   * @param text Appending text (must be in singular form)
   * @returns Item(s) count + pluralized text
   */
  export function pluralizeTextCount(count: number, text: string): string {
    const value = `${count} ${text}`;

    if (count > 1) {
      return value + "s";
    }

    return value;
  }

  /**
   * Returns the pluralizedd appending text.
   * Example: Items, apples, or dog.
   *
   * Does not work well with irregular nouns like:
   * children, cacti, mice, men, women, etc.
   *
   * @param count Item(s) count
   * @param text Appending text (must be in singular form)
   * @returns Pluralized text
   */
  export function pluralizeText(count: number, text: string): string {
    if (count > 1) {
      return text + "s";
    }

    return text;
  }
}
