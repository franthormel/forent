"use client"

import { useRouter } from "next/navigation"
import Button, { ButtonProps } from "./Button"

type RouterButtonPropsType = Omit<ButtonProps, "onClick">

export interface RouterButtonProps extends RouterButtonPropsType {
    /**
     * Page or URL to be routed to.
     */
    route: string;
}

export default function RouterButton(props: RouterButtonProps) {
    const router = useRouter();
    return <Button onClick={() => router.replace(props.route)} text={props.text} />
}