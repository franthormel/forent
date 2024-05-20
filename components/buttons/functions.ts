import { ButtonSize, ButtonType } from "./types";

/**
 * Decide padding values depending on the given button size
 *
 * @param size Button size
 * @returns Padding
 */
export function buttonPadding(size: ButtonSize = "base"): string {
  const values = {
    base: "px-10 py-4",
    small: "px-5 py-2.5",
  };
  return values[size];
}

/**
 * Decide font size value depending on the given button size
 *
 * @param size Button size
 * @returns Font size
 */
export function buttonFontSize(size: ButtonSize = "base"): string {
  const values = {
    base: "text-base",
    small: "text-sm",
  };
  return values[size];
}

/**
 * Returns default type `button` if undefined
 *
 * @param type Button type
 * @returns Button type
 */
export function buttonType(type?: ButtonType): ButtonType {
  if (type === undefined) {
    return "button";
  }
  return type;
}

/**
 * Decide which type of cursor to use depending on the given loading param
 *
 * @param loading Loading state
 * @returns Cursor not allowed if loading or undefined if not loading
 */
export function buttonCursor(loading?: boolean) {
  if (loading) {
    return "cursor-not-allowed";
  }
}

/**
 * Decide which text to display  to use depending on the given loading param
 *
 * @param loading Loading state
 * @returns Loading if loading or undefined if not
 */
export function buttonText(loading?: boolean) {
  if (loading) {
    return "Loading...";
  }
}
