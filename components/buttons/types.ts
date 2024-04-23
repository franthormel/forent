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
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dataCyBtn?: string;
  /**
   * Default size is 'base'
   */
  size?: ButtonSize;
}
