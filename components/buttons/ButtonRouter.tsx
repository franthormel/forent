"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import Button from "./Button";
import { ButtonBorderRadius, ButtonColor } from "./types";

interface ButtonRouterProps {
    /**
     * Button color
     */
    color?: ButtonColor;
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
    /**
     * Default is `rounded` corners
     */
    borderRadius?: ButtonBorderRadius
    /**
     * Page or URL to be routed to.
     */
    route: string;
}

export default function ButtonRouter(props: ButtonRouterProps) {
    const router = useRouter();
    return (
        <Button onClick={() => router.push(props.route)}
            text={props.text}
            borderRadius="square"
            dataCy="router-button"
            color={props.color}
        />
    );
}