import Link from "next/link";

interface LinkButtonProps {
    /**
     * URL for the `Link` component.
     */
    href: string;
    /** 
     * Text to be displayed.
     */
    text: string;
}

export default function LinkButton({
    ...props
}: LinkButtonProps) {
    return (
        <div className="bg-yellow-300 px-3 py-2 rounded-full w-fit">
            <Link href={props.href}>{props.text}</Link>
        </div>
    );
}