import SectionHeaderIcon from "@/components/section/header-icon";
import Link from "next/link";

interface ListingPageContactProps {
    name?: string | null
    contactNumber?: string | null
    email: string
    dataCyValueName?: string
    dataCyValueContactNumber?: string
    dataCyValueEmail?: string
}

export default function ListingPageContact(props: ListingPageContactProps) {
    return (
        <div className="grid auto-rows-auto gap-y-4">
            <SectionHeaderIcon props={{
                text: "Contact",
                dataCyIcon: "listing-contact-section-icon",
                dataCyText: "listing-contact-section-text",
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                    <path
                        d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Z" />
                </svg>
            </SectionHeaderIcon>
            <div className="flex items-end gap-x-8">
                {
                    props.name &&
                    <span className="font-medium" data-cy={props.dataCyValueName ?? "listing-contact-value-name"}>
                        {props.name}
                    </span>
                }
                {
                    props.contactNumber &&
                    <span className="text-sm text-gray-700"
                        data-cy={props.dataCyValueContactNumber ?? "listing-contact-value-number"}>
                        {props.contactNumber}
                    </span>
                }
                <Link href={`mailto:${props.email}`}
                    data-cy={props.dataCyValueEmail ?? "listing-contact-value-email"}>
                    <span className="text-sm text-gray-700 underline">
                        {props.email}
                    </span>
                </Link>
            </div>
        </div>
    )
}
