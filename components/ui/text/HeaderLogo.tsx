import { logoFont } from "@/app/fonts";
import Link from "next/link";
import { ColorThemePicker } from "../../theme/color";
import PropsTheme from "../../theme/props";

export default function HeaderLogo(props: PropsTheme) {
    const textColor = ColorThemePicker.textColor(props.colorMode);

    return (
        <Link href="/">
            <header className={`${logoFont.className} ${textColor} text-4xl`} data-cy="logo-header">
                Forent
            </header>
        </Link>
    );
}
