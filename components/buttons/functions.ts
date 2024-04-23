import { ButtonSize } from "./types";

// TODO: Unit test
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

// TODO: Unit test
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
