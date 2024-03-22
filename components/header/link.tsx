import Link from "next/link";
import Header, { HeaderProps } from ".";

interface HeaderLinkProps extends HeaderProps {
    href: string;
    dataCyHeaderLink?: string;
}

export default function HeaderLink(props: HeaderLinkProps) {
    return (
        <Link href={props.href} data-cy={props.dataCyHeaderLink ?? "header-link"}>
            <Header value={props.value} dataCy={props.dataCy} />
        </Link>
    );
}
