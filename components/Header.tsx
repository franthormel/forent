import { headerFont } from "@/app/fonts";

interface HeaderProps {
    /**
     * Text value
     */
    text: string;
}

export default function Header({
    text = ''
}: HeaderProps) {
    return <header className={`text-4xl ${headerFont.className}`} data-cy="header">{text}</header>
}
