import { MouseEventHandler } from "react"
import Header, { HeaderProps } from "."

interface HeaderActionsProps extends HeaderProps {
    onClick: MouseEventHandler
}

export default function HeaderAction(props: HeaderActionsProps) {
    return (
        <div onClick={props.onClick}
            className="cursor-pointer"
            data-cy={props.dataCy ?? "header-action"}>
            <Header value={props.value} />
        </div>
    )
}
