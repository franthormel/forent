import { MouseEventHandler } from "react";

export type IconSize = 24 | 30 | 36 | 48;

export interface ButtonIconActualProps {
  dataCy?: string;
  /**
   * Measured in pixels. Default is 24
   */
  size?: IconSize;
  onClick?: MouseEventHandler;
}

export interface ButtonIconProps {
  alt: string;
  dataCy?: string;
  onClick?: MouseEventHandler;
}
