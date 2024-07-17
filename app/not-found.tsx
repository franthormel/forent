import ButtonOutlined from "@/components/buttons/outlined";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="grid gap-4 place-items-center">
            <p className="text-8xl md:text-9xl" data-cy="not-found-glyph">¯\_(ツ)_/¯</p>
            <p className="text-2xl" data-cy="not-found-text">This page does not exist</p>
            <Link href="/" data-cy="not-found-link-homepage">
                <ButtonOutlined text="Go to Homepage" dataCy="not-found-button" />
            </Link>
        </div>
    );
}
