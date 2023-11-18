import { logoFont } from "@/app/fonts";

export default function LogoHeader() {
    return <header className={`text-3xl ${logoFont.className}`} data-cy="logo-header">Forent</header>
}
