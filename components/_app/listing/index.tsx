import PageLayout from "../page-layout";
import ListingBanner from "./banner";
import ListingContact from "./contact";
import ListingDescription from "./description";
import ListingMainInfo from "./main-info";
import ListingMap from "./map";

export interface ListingProps {
    id: string
    imageUrls: string[]
    price: number
    beds: number
    baths: number
    area: number
    availableDate: Date | null
    addressLine: string
    city: string
    state: string
    zipCode: string | number | null
    name?: string | null
    contactNumber?: string | null
    email: string
    description: string
    latitude: number
    longitude: number
}

// TODO: Story
export default function Listing(props: ListingProps) {
    return <PageLayout>
        {/* Photos & main information */}
        <div className="grid auto-rows-auto gap-y-11">
            <ListingBanner imageUrls={props.imageUrls} listingId={props.id} />
            <ListingMainInfo price={props.price} beds={props.beds} baths={props.baths} area={props.area}
                availableDate={props.availableDate} addressLine={props.addressLine} city={props.city}
                state={props.state} zipCode={props.zipCode} />
        </div>
        <ListingContact name={props.name} contactNumber={props.contactNumber} email={props.email} />
        <ListingDescription description={props.description} />
        <ListingMap lat={props.latitude} lon={props.longitude} />
    </PageLayout>
}