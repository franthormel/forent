import { ThemeColorPicker } from "@/theme/color";
import { ColorSwatch } from "@/theme/props";
import { MouseEventHandler } from "react";

export interface ButtonProps {
    /**
     * Button color
     */
    color?: ColorSwatch;
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
    const color = ThemeColorPicker.backgroundColor(props.color);
    const cypressSelector = props.dataCy ?? "button";

    return (
        <button className={`${color} rounded-full px-10 py-4 transition-all hover:shadow-md`}
            data-cy={cypressSelector}
            onClick={props.onClick}>
            {props.text}
        </button>
    );
}
