import { EventHandler, MouseEventHandler } from "react";

type ButtonColor = "primary" | "secondary" | "tertiary";
type ButtonBorderRadius = "rounded" | "square";

export interface ButtonProps {
    color?: ButtonColor;
    text: string;
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

// TODO: For theming
export default function Button(props: ButtonProps) {
    const color = chooseColor(props.color);
    const cypressSelector = chooseDataCy(props.dataCy);
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
        case "primary" || null || undefined: return "bg-amber-400";
    }
}

function chooseDataCy(dataCy?: string) {
    if (!dataCy) {
        return "button"
    }
    return dataCy;
}