import { MouseEventHandler } from "react";

export interface ButtonIconActualProps {
  dataCy?: string;
  onClick?: MouseEventHandler;
}

export interface ButtonIconProps {
  alt: string;
  dataCy?: string;
  onClick?: MouseEventHandler;
}
