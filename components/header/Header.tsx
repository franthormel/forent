import { headerFont } from "@/app/fonts";

interface HeaderProps {
    /**
     * Text to display
     */
    value: string;
}

export default function Header(props: HeaderProps) {
    return (
        <header className={`${headerFont.className} text-gray-800 text-2xl`} data-cy="header">
            {props.value ?? "Header"}
        </header>
    );
}
