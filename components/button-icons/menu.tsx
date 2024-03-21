"use client"

import ButtonIcon from "."
import { iconSize } from "./functions"
import { ButtonIconActualProps } from "./types"

// TODO: make component test
// TODO: make story
export default function ButtonIconMenu(props: ButtonIconActualProps) {
    const size = iconSize(props.size)

    return <ButtonIcon props={{
        alt: "Menu",
        dataCy: props.dataCy ?? "menu-btn-icon",
        onClick: props.onClick
    }}>
        <svg xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 -960 960 960">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    </ButtonIcon>
}