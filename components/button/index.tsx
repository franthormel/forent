import { MouseEventHandler } from "react";

interface ButtonProps {
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
    const cypressSelector = props.dataCy ?? "button";

    return (
        <button className="bg-amber-400 rounded-full px-10 py-4 transition-all hover:shadow-md"
            data-cy={cypressSelector}
            onClick={props.onClick}>
            {props.text ?? "Button"}
        </button>
    );
}
