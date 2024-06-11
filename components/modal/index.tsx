import { MouseEventHandler, ReactNode } from "react"

export interface ModalProps {
    show?: boolean
    close: MouseEventHandler<HTMLDivElement>
}


export default function Modal({ children, props }: {
    props: ModalProps,
    children: ReactNode
}) {
    return <div className={`${props.show ? 'block' : 'hidden'} fixed left-0 top-0 z-10 h-full w-full bg-slate-800/60`}
        onClick={props.close}>
        {/* TODO: Fix not scrollable See https://stackoverflow.com/a/18366583*/}
        <section className="shadow-md rounded-sm p-4 fixed bg-slate-50 w-4/5 h-auto">
            {children}
        </section>
    </div>
}