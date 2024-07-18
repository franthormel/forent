import { MouseEventHandler } from "react";

export interface ButtonTextIconOutlinedProps {
    text: string;
    onClick?: MouseEventHandler;
    dataCy?: string;
}

// NOTE: Text -> Icon
export default function ButtonTextIconOutlined({ children, props }: { children: React.ReactNode, props: ButtonTextIconOutlinedProps }) {
    return (
        <button className="rounded-full bg-slate-50 px-5 py-2 outline outline-1 outline-gray-800 transition-all 
                        // Button and text hover color
                        hover:bg-gray-800 hover:text-slate-50 
                        // SVG Icon hover color
                        fill-gray-800 hover:fill-slate-50"
            data-cy={props.dataCy ?? "button-icon-text"}
            onClick={props.onClick}>
            <div className="flex">
                {props.text}
                <div className="ml-1">
                    {children}
                </div>
            </div>
        </button>
    );
}
