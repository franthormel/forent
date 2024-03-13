import { headerFont } from "@/app/fonts";
import Header, { HeaderProps } from "../header";
import Link from "next/link";

interface HeaderLinkProps extends HeaderProps {
    link: string;
}

export default function HeaderLink(props: HeaderLinkProps) {
    return (
        <Link href={props.link} data-cy="header-link">
            <Header value={props.value} />
        </Link>
    );
}
