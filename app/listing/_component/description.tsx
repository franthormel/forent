import SectionHeaderIcon from "@/components/section/header-icon";

interface ListingPageDescriptionProps {
    description: string
    dataCy?: string
    dataCyDescription?: string
}

export default function ListingPageDescription(props: ListingPageDescriptionProps) {
    return (
        <div className="grid auto-rows-auto gap-y-4" data-cy={props.dataCy ?? "listing-description"}>
            <SectionHeaderIcon props={{ text: "Description", dataCy: "section-header-icon-description" }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                    <path
                        d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z" />
                </svg>
            </SectionHeaderIcon>
            <p className="whitespace-pre-line leading-7 text-gray-700 md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
                data-cy={props.dataCyDescription ?? "listing-description-value"}>
                {props.description}
            </p>
        </div>
    )
}
