import { MouseEventHandler, ReactNode } from "react"

export interface ModalProps {
    show?: boolean
    close: MouseEventHandler<HTMLDivElement>
    dataCy?: string
    dataCyBackdrop?: string
    dataCyContent?: string
}

/**
 * Requirements for using this component.
 * 
 * 1. Create a boolean state variable that controls the modal's visibility
 * 2. An action button to hide/show the modal by changing the boolean state variable's value
 */
export default function Modal({ children, props }: {
    props: ModalProps,
    children: ReactNode
}) {
    if (props.show) {
        return (
            <div className="relative"
                data-cy={props.dataCy ?? "modal"}>
                <div className="fixed left-0 top-0 z-20 h-full w-full overflow-y-hidden bg-slate-800/60"
                    onClick={props.close}
                    data-cy={props.dataCyBackdrop ?? "modal-backrop"} />
                <section className="fixed left-0 top-0 z-30 h-fit max-h-full w-max max-w-[80%] bg-slate-50 overflow-y-auto"
                    data-cy={props.dataCyContent ?? "modal-content"}>
                    {/* NOTE: The child element should be responsible for its own spacing (padding, margin, etc.) */}
                    {children}
                </section>
            </div>
        )
    }
}
