import { MouseEventHandler } from "react";
import { ButtonColor } from "./types";

export interface ButtonProps {
    /**
     * Button color
     */
    color?: ButtonColor;
    /**
     * Button text
     */
    text: string;
    /**
     * Button action when clicked
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Data attribute for Cypress.
     */
    dataCy?: string;
}

export default function Button(props: ButtonProps) {
    const color = chooseColor(props.color);

    return (
        <button className={`${color} rounded-full px-10 py-4 transition-all hover:shadow-md`}
            data-cy="button"
            onClick={props.onClick}>
            {props.text}
        </button>
    );
}

// todo: move to colorthemepicker
function chooseColor(color?: ButtonColor) {
    switch (color) {
        case "secondary": return "bg-orange-600";
        case "tertiary": return "bg-cyan-300";
        case "primary": return "bg-amber-400";
        default: return "bg-amber-400";
    }
}
