"use client"

import { StringUtils } from "@/lib/commons/string_utils"
import { CURRENCY_FORMATTER } from "@/lib/currency"
import { availableDateText, depositText } from "./function"
import ListingMainInfoColumn from "./main-info-col"

export interface ListingMainInfoProps {
    price: number
    deposit?: number
    beds: number
    baths: number
    area: number
    availableDate: Date | null
    addressLine: string
    city: string
    state: string
    zipCode: string | number | null
    dataCyPrice?: string
    dataCyAddressLine?: string
    dataCyAddressSpace?: string
    dataCyAddressCityStateZip?: string
}

export default function ListingMainInfo(props: ListingMainInfoProps) {
    return (
        <div className="grid auto-rows-auto gap-y-3">
            {/* Price */}
            <div data-cy={props.dataCyPrice ?? "listing-main-info-price"}>
                <span className="text-4xl font-bold">
                    {CURRENCY_FORMATTER.format(props.price)}
                </span>
                <span className="text-xl font-bold">/mo</span>
            </div>
            {/* Beds, Baths, Area, Available Date */}
            <div className="flex gap-x-8">
                <ListingMainInfoColumn value={props.beds} label={StringUtils.pluralizeText(props.beds, "Bed")}
                    dataCyValue="listing-main-info-col-value-beds"
                    dataCyLabel="listing-main-info-col-label-beds" />
                <ListingMainInfoColumn value={props.baths} label={StringUtils.pluralizeText(props.baths, "Bath")}
                    dataCyValue="listing-main-info-col-value-baths"
                    dataCyLabel="listing-main-info-col-label-baths" />
                {/* FUTURE: Localize `sqm` */}
                <ListingMainInfoColumn value={props.area} label="Area (sqm)"
                    dataCyValue="listing-main-info-col-value-area"
                    dataCyLabel="listing-main-info-col-label-area" />
                <ListingMainInfoColumn value={availableDateText(props.availableDate, new Date())} label="Date Available"
                    dataCyValue="listing-main-info-col-value-available-date"
                    dataCyLabel="listing-main-info-col-label-available-date" />
                <ListingMainInfoColumn value={depositText(props.deposit)} label="Deposit"
                    dataCyValue="listing-main-info-col-value-deposit"
                    dataCyLabel="listing-main-info-col-label-deposit" />
            </div>
            {/* Address */}
            <div className="text-gray-700">
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
