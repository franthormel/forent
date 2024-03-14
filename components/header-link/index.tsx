import { headerFont } from "@/app/fonts";
import Header, { HeaderProps } from "../header";
import Link from "next/link";

interface HeaderLinkProps extends HeaderProps {
    link: string;
    dataCyHeaderLink?: string;
}

export default function HeaderLink(props: HeaderLinkProps) {
    return (
        <Link href={props.link} data-cy={props.dataCyHeaderLink ?? "header-link"}>
            <Header value={props.value} dataCyHeader={props.dataCyHeader} />
        </Link>
    );
}
