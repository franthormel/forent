import { MouseEventHandler } from "react";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  /**
   * Button text
   */
  text: string;
  /**
   * Button action when clicked
   */
  onClick?: MouseEventHandler;
  dataCy?: string;
  /**
   * Default type is `button`
   */
  type?: ButtonType;
  /**
   * Default is `false`. Set to `true` to show loading state and animation.
   */
  loading?: boolean;
}
