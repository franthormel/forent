import { ButtonSize } from "../buttons/types";

export interface ButtonLinkProps {
  text: string;
  href: string;
  /**
   * Default size is 'base'
   */
  size?: ButtonSize;
  dataCy?: string;
}
