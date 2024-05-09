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
