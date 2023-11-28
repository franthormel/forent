import { EventHandler, MouseEventHandler } from "react";

type ButtonColor = "primary" | "secondary" | "tertiary";
type ButtonBorderRadius = "rounded" | "square";

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
            <span>{props.text}</span>
        </button>
    );
}

function chooseButtonBorderRadius(borderRadius?: ButtonBorderRadius) {
    if (borderRadius == "rounded") {
        return "rounded-full";
    }
    return "rounded-md";
}

function chooseColor(color?: ButtonColor) {
    switch (color) {
        case "secondary": return "bg-orange-600";
        case "tertiary": return "bg-cyan-300";
        case "primary": return "bg-amber-400";
        default: return "bg-amber-400";
    }
}
