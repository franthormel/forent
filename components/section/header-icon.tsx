import { ReactNode } from "react"

interface SectionHeaderIconProps {
    text: string
    dataCy?: string
}

export default function SectionHeaderIcon({ children, props }: {
    children: ReactNode,
    props: SectionHeaderIconProps
}) {
    return (
        <div className="flex gap-x-2" data-cy={props.dataCy ?? "section-header-icon"}>
            <div className="fill-gray-600">
                {children}
            </div>
            <header className="text-xl text-gray-800">
                {props.text}
            </header>
        </div>
    )
}
