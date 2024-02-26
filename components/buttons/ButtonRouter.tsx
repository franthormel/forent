"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import Button from "./Button";
import { ButtonColor } from "./types";

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
     * Page or URL to be routed to.
     */
    route: string;
}

export default function ButtonRouter(props: ButtonRouterProps) {
    const router = useRouter();
    return (
        <Button onClick={() => router.push(props.route)}
            text={props.text}
            dataCy="router-button"
            color={props.color} // todo: this is wrong lol
        />
    );
}