import Link from "next/link";
import ButtonFilled from "../buttons/filled";
import { ButtonLinkProps } from "./types";

export default function ButtonLinkFilled(props: ButtonLinkProps) {
    return (
        <Link href={props.href} data-cy={props.dataCy ?? "button-link-filled"}>
            <ButtonFilled text={props.text} size={props.size} />
        </Link>
    )
}
