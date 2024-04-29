"use client"

import { StringUtils } from "@/lib/commons/string_utils"
import { availableDateText } from "./function"
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
    dataCy?: string
    dataCyPrice?: string
    dataCyCols?: string
    dataCyAddress?: string
    dataCyAddressLine?: string
    dataCyAddressSpace?: string
    dataCyAddressCityStateZip?: string
}

export default function ListingPageMainInfo(props: ListingPageMainInfoProps) {
    return (
        <div className="grid auto-rows-auto gap-y-3"
            data-cy={props.dataCy ?? "listing-main-info"}>
            {/* Price */}
            <div data-cy={props.dataCyPrice ?? "listing-main-info-price"}>
                {/* FUTURE: Localize currency, put in env */}
                <span className="text-4xl font-bold">
                    ₱ {new Intl.NumberFormat('en-PH').format(props.price,)}
                </span>
                <span className="text-xl font-bold">/mo</span>
            </div>
            {/* Beds, Baths, Area, Available Date */}
            <div className="flex gap-x-8" data-cy={props.dataCyCols ?? "listing-main-info-cols"}>
                <ListingPageMainInfoColumn value={props.beds} label={StringUtils.pluralizeText(props.beds, "Bed")}
                    dataCyValue="listing-main-info-col-value-beds"
                    dataCyLabel="listing-main-info-col-label-beds" />
                <ListingPageMainInfoColumn value={props.baths} label={StringUtils.pluralizeText(props.baths, "Bath")}
                    dataCyValue="listing-main-info-col-value-baths"
                    dataCyLabel="listing-main-info-col-label-baths" />
                <ListingPageMainInfoColumn value={props.area} label="Area (sqm)"
                    dataCyValue="listing-main-info-col-value-area"
                    dataCyLabel="listing-main-info-col-label-area" />
                <ListingPageMainInfoColumn value={availableDateText(props.availableDate, new Date())} label="Date Available"
                    dataCyValue="listing-main-info-col-value-available-date"
                    dataCyLabel="listing-main-info-col-label-available-date" />
            </div>
            {/* Address */}
            <div className="text-gray-700" data-cy={props.dataCyAddress ?? "listing-main-info-address"}>
                <p className="block lg:inline-block"
                    data-cy={props.dataCyAddressLine ?? "listing-main-info-address-line"}>
                    {props.addressLine},
                </p>
                <span className="hidden lg:inline"
                    data-cy={props.dataCyAddressSpace ?? "listing-main-info-address-space"}>
                    &nbsp;
                </span>
                <p className="block lg:inline-block"
                    data-cy={props.dataCyAddressCityStateZip ?? "listing-main-info-address-city-state-zip"}>
                    {props.city}, {props.state} {props.zipCode}
                </p>
            </div>
        </div>
    )
}