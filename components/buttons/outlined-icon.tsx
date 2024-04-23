import { ReactNode } from "react";
import { ButtonProps } from "./types";

export default function ButtonOutlinedIcon({ props, children }: { props: ButtonProps, children: ReactNode }) {
    return (
        <button className="rounded-full border-2 border-gray-800 px-10 py-4 text-gray-800 transition-all hover:bg-gray-800 hover:text-slate-50"
            data-cy={props.dataCyBtn ?? "button"}
            onClick={props.onClick}>
            {props.text ?? "Button"}
        </button>
    );
}