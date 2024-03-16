import { logoFont } from "@/app/fonts";
import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href="/">
            <header className={`${logoFont.className} text-gray-800 text-4xl`} data-cy="logo-header">
                Forent
            </header>
        </Link>
    );
}
