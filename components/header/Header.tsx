import { headerFont } from "@/app/fonts";
import { ThemeColorPicker } from "../../theme/color";
import PropsTheme from "../../theme/props";

export interface HeaderProps extends PropsTheme {
    /**
     * Text to display
     */
    value: string;
}

export default function Header(props: HeaderProps) {
    const textColor = ThemeColorPicker.textColor(props.theme);

    return (
        <header className={`${headerFont.className} ${textColor} text-2xl`} data-cy="header">
            {props.value}
        </header>
    );
}
