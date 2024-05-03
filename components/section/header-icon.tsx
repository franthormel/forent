import { ReactNode } from "react"

interface SectionHeaderIconProps {
    text: string
    dataCyIcon?: string
    dataCyText?: string
}

export default function SectionHeaderIcon({ children, props }: {
    children: ReactNode,
    props: SectionHeaderIconProps
}) {
    return (
        <div className="flex gap-x-2">
            <div data-cy={props.dataCyIcon ?? "section-header-icon"}
                className="fill-gray-600">
                {children}
            </div>
            <header data-cy={props.dataCyText ?? "section-header-text"}
                className="text-xl font-medium">
                {props.text}
            </header>
        </div>
    )
}
