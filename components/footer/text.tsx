import { headerFont } from "@/app/fonts";

interface FooterTextProps {
    value: string;
    dataCy?: string;
}

export default function FooterText(props: FooterTextProps) {
    return (
        <p className={`${headerFont.className} text-lg`}
            data-cy={props.dataCy ?? "text-footer"}>
            {props.value}
        </p>
    )
}
