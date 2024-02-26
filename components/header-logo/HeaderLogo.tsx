import { logoFont } from "@/app/fonts";
import { ThemeColorPicker } from "@/theme/color";
import PropsTheme from "@/theme/props";
import Link from "next/link";

export default function HeaderLogo(props: PropsTheme) {
    const textColor = ThemeColorPicker.textColor(props.theme);

    return (
        <Link href="/">
            <header className={`${logoFont.className} ${textColor} text-4xl`} data-cy="logo-header">
                Forent
            </header>
        </Link>
    );
}
