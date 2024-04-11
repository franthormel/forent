import { ButtonProps } from "./types";

export default function ButtonFilled(props: ButtonProps) {
    return (
        <button className="bg-amber-400 rounded-full px-10 py-4 transition-all hover:shadow-md"
            data-cy={props.dataCyBtn ?? "button"}
            onClick={props.onClick}>
            {props.text ?? "Button"}
        </button>
    );
}
