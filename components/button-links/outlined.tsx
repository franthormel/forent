import Link from "next/link";
import ButtonOutlined from "../buttons/outlined";
import { ButtonLinkProps } from "./types";

export default function ButtonLinkOutlined(props: ButtonLinkProps) {
    return (
        <Link href={props.href} data-cy={props.dataCy ?? "button-link-outlined"}>
            <ButtonOutlined text={props.text} size={props.size} />
        </Link>
    )
}
