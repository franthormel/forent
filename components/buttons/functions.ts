import { ButtonType } from "./types";

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
