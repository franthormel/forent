import ButtonLinkOutlined from "@/components/button-links/outlined";

export default function NotFound() {
    return (
        <div className="grid gap-4 place-items-center" data-cy="not-found">
            <p className="text-8xl md:text-9xl" data-cy="not-found-glyph">¯\_(ツ)_/¯</p>
            <p className="text-2xl" data-cy="not-found-text">This page does not exist</p>
            <ButtonLinkOutlined href="/" text="Go to Homepage" dataCy="not-found-button" />
        </div>
    );
}
