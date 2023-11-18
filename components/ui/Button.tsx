import { EventHandler, MouseEventHandler } from "react";

export interface ButtonProps {
    /**
     * Tailwind CSS color
     */
    color?: string;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function chooseColor(color?: string) {
    if (!color) {
        return "bg-amber-400"
    }
    return color;
}
// TODO: For theming
export default function Button(props: ButtonProps) {
    const color = chooseColor(props.color);

    return (
        <button className={`w-fit rounded-full px-6 py-3 transition-all hover:shadow-md ${color}`}
            onClick={props.onClick}>
            <span>{props.text}</span>
        </button>
    );
}