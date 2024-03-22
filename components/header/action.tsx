import { MouseEventHandler } from "react"
import Header, { HeaderProps } from "."

interface HeaderActionsProps extends HeaderProps {
    onClick: MouseEventHandler
    dataCyHeaderAction?: string
}

export default function HeaderAction(props: HeaderActionsProps) {
    return (
        <div onClick={props.onClick}
            className="cursor-pointer"
            data-cy={props.dataCyHeaderAction ?? "header-action"}>
            <Header value={props.value} dataCy={props.dataCy} />
        </div>
    )
}