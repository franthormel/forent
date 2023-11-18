import { EventHandler, MouseEventHandler } from "react";

type ButtonBorderRadius = "rounded" | "square";

export interface ButtonProps {
    /**
     * Tailwind CSS color
     */
    color?: string;
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
        <button className={`w-fit ${borderRadius} px-6 py-3 transition-all hover:shadow-md ${color}`}
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

function chooseColor(color?: string) {
    if (!color) {
        return "bg-amber-400"
    }
    return color;
}

function chooseDataCy(dataCy?: string) {
    if (!dataCy) {
        return "button"
    }
    return dataCy;
}