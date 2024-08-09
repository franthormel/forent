import { formatAppend } from "@/lib/formatter/number";

export interface ListingsListTopInterface {
    listingsCount: number
}

export function ListingsListTop(props: ListingsListTopInterface) {
    return (
        <div>
            <div className="basis-14 px-5 py-4 block md:flex md:flex-row border-y-[1px] border-gray-200">
                {
                    props.listingsCount > 0 &&
                    <span className="font-bold md:mr-6">
                        {formatAppend(props.listingsCount, "listings")}
                    </span>
                }
                <div>
                    <span className="font-bold mr-1">Sort by</span>
                    <select className="bg-inherit cursor-pointer">
                        <option value="Newest">Newest</option>
                        <option value="Price (high to low)">Price (high to low)</option>
                        <option value="Price (low to high)">Price (low to high)</option>
                        <option value="Area">Area</option>
                        <option value="Beds">Beds</option>
                        <option value="Bathrooms" >Bathrooms</option>
                    </select>
                </div>
            </div>
        </div>
    )
}