import { logoFont } from "@/app/fonts";
import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href="/" data-cy="logo-header">
            <header className={`${logoFont.className} text-4xl`}>
                Forent
            </header>
        </Link>
    );
}
