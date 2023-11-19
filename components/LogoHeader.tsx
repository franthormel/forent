import { logoFont } from "@/app/fonts";
import Link from "next/link";

export default function LogoHeader() {
    return (
        <Link href="/">
            <header className={`${logoFont.className}`} data-cy="logo-header">
                Forent
            </header>
        </Link>
    );
}
