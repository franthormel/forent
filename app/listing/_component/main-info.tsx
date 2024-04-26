"use client"

import { DateUtils } from "@/lib/commons/date_utils"
import { StringUtils } from "@/lib/commons/string_utils"
import ListingPageMainInfoColumn from "./main-info-col"

export interface ListingPageMainInfoProps {
    price: number
    beds: number
    baths: number
    area: number
    availableDate: Date | null
    addressLine: string
    city: string
    state: string
    zipCode: string | number | null
}

/**
 * Display proper text if the given listing's date is considered available
 * 
 * @param availableDate Listing availability date
 * @returns "Available Now" if it is available otherwise the localized date
 */
// TODO: Unit test
function availableDateText(availableDate: Date | null) {
    // Listing is considered available if ...
    const text = "Available Now"

    // ... if its null or ...
    if (availableDate === null) {
        return text
    }

    // ... given date already passed.
    const today = new Date()
    const isPastDate = DateUtils.dateHasPassed(availableDate, today)
    const isToday = DateUtils.dateIsToday(availableDate, today);
    if (isPastDate || isToday) {
        return text
    }

    return new Intl.DateTimeFormat('en-PH', {
        dateStyle: 'long',
        timeZone: 'Asia/Manila',
    }).format(availableDate)
}

// TODO: Component test
export default function ListingPageMainInfo(props: ListingPageMainInfoProps) {
    return (
        <div className="grid auto-rows-auto gap-y-3">
            {/* Price */}
            <div>
                <span className="text-4xl font-bold">₱ {new Intl.NumberFormat('en-PH', { maximumSignificantDigits: 3 }).format(props.price,)}</span>
                <span className="text-xl font-bold">/mo</span>
            </div>
            {/* Beds, Baths, Area, Available Date */}
            <div className="flex gap-x-8">
                <ListingPageMainInfoColumn value={props.beds} label={StringUtils.pluralizeText(props.beds, "Bed")} />
                <ListingPageMainInfoColumn value={props.baths} label={StringUtils.pluralizeText(props.baths, "Bath")} />
                <ListingPageMainInfoColumn value={props.area} label="Area (sqm)" />
                <ListingPageMainInfoColumn value={availableDateText(props.availableDate)} label="Date Available" />
            </div>
            {/* Address */}
            <div>
                <div className="text-gray-700">
                    <p className="block md:inline-block">{props.addressLine},</p>
                    <span className="hidden md:inline">&nbsp;</span>
                    <p className="block md:inline-block">{props.city}, {props.state} {props.zipCode}</p>
                </div>
            </div>
        </div>
    )
}
