"use client"

import { useRouter } from "next/navigation";
import Button, { ButtonProps } from "../button/Button";

type RouterButtonPropsType = Omit<ButtonProps, "onClick">

export interface ButtonRouterProps extends RouterButtonPropsType {
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