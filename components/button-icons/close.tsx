"use client"

import ButtonIcon from "."
import { iconSize } from "./functions"
import { ButtonIconActualProps } from "./types"

export default function ButtonIconClose(props: ButtonIconActualProps) {
    const size = iconSize(props.size)

    return <ButtonIcon props={{
        alt: "Close",
        dataCy: props.dataCy ?? "close-btn-icon",
        onClick: props.onClick
    }}>
        <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 -960 960 960">
            <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
    </ButtonIcon>
}
