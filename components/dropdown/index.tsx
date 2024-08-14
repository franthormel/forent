"use client"

import { ReactNode, useState } from "react";
import ButtonTextIconOutlined from "../buttons/text-icon-outlined";

export interface DropdownProps {
    text: string,
}

export default function Dropdown({ children, props }: { children: ReactNode, props: DropdownProps }) {
    const [display, setDisplay] = useState<boolean>(false);

    return (
        <div className="relative flex">
            <ButtonTextIconOutlined props={{
                text: props.text,
                onClick: (e) => {
                    setDisplay(!display);
                }
            }}>
                <svg xmlns="http://www.w3.org/1000/svg"
                    viewBox="0 -960 960 960"
                    height="24"
                    width="24">
                    <path d="M480-360 280-560h400L480-360Z" />
                </svg>
            </ButtonTextIconOutlined>
            {/* NOTE: Width can be customized by the child component */}
            {display &&
                <div className="absolute top-16 z-20 w-fit rounded-md border border-gray-200 bg-slate-50 p-4 shadow-md">
                    {children}
                </div>}
        </div>
    );
}
