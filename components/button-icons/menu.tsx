"use client"

import ButtonIcon from "."
import { ButtonIconActualProps } from "./types"

// TODO: make component test
// TODO: make story
export default function ButtonIconMenu(props: ButtonIconActualProps) {
    return <ButtonIcon props={{
        alt: "Menu",
        dataCy: props.dataCy ?? "menu-btn-icon",
        onClick: props.onClick
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    </ButtonIcon>
}