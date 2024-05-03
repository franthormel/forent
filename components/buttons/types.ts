import { MouseEventHandler } from "react";

export type ButtonSize = "base" | "small";

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
   * Default size is 'base'
   */
  size?: ButtonSize;
}
