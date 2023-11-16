import Link from "next/link"

interface LinkButtonProps {
    /**
     * URL for the `Link` component.
     */
    href: string
    /** 
     * Text to be displayed.
     */
    text: string
}

export default function LinkButton({
    ...props
}: LinkButtonProps) {
    return (
        <div className="w-fit rounded-full bg-blue-500 px-3 py-2">
            <Link href={props.href} data-cy="link-button">{props.text}</Link>
        </div>
    )
}

// TODO: disabled and onclick CSS styles for button
