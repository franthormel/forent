import { ReactNode } from "react";
import { ButtonIconProps } from "./types";

export default function ButtonIcon({ children, props }: {
    props: ButtonIconProps,
    children: ReactNode
}) {
    const dataCy = props.dataCy ?? "btn-icon";

    return <div className="self-center block cursor-pointer fill-gray-800"
        onClick={props.onClick}
        data-cy={dataCy}
        aria-label={props.alt}>
        {children}
    </div>
}