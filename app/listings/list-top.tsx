export function ListingsListTop() {
    return (
        <div>
            {/* TODO: Count and sort options */}
            <div className="basis-14 px-5 py-4 block md:flex md:flex-row border-y-[1px] border-gray-200">
                {/* Count */}
                {/* TODO: Use actual numbers */}
                {/* TODO: Ensure number formatting is correct (use commas to separate) 
                (refactor (similar to AREA_FORMATTER now) and use NUMBER_FORMATTER) */}
                <span className="font-bold md:mr-6">
                    7,238 listings
                </span>
                {/* TODO: Sort options */}
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