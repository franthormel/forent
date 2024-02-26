import { MouseEventHandler } from "react";
import { ButtonColor, ButtonBorderRadius } from "./types";

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
    /**
     * Default is `rounded` corners
     */
    borderRadius?: ButtonBorderRadius
}

export default function Button(props: ButtonProps) {
    const color = chooseColor(props.color);
    const cypressSelector = props.dataCy ?? "button";
    const borderRadius = chooseButtonBorderRadius(props.borderRadius);

    return (
        <button className={`w-fit ${borderRadius} px-6 py-3 transition-all ${color} hover:shadow-md`}
            data-cy={cypressSelector}
            onClick={props.onClick}>
            {props.text}
        </button>
    );
}

// todo: should be refactored
function chooseButtonBorderRadius(borderRadius?: ButtonBorderRadius) {
    if (borderRadius == "rounded") {
        return "rounded-full";
    }
    return "rounded-md";
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
