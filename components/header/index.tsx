import { headerFont } from "@/app/fonts";

export interface HeaderProps {
    /**
     * Text to display
     */
    value: string;
    dataCy?: string;
}

export default function Header(props: HeaderProps) {
    return (
        <header className={`${headerFont.className} text-2xl`}
            data-cy={props.dataCy ?? "header"}>
            {props.value}
        </header>
    );
}
