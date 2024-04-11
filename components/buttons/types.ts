import { MouseEventHandler } from "react";

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
}
