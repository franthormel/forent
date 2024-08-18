"use client"

import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled"
import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import { useContext, useState } from "react"
import { BEDS_BATHS_DEFAULT, BEDS_BATHS_FILTER } from "./constants"
import { ListingsContext } from "./provider"

export default function ListingsFiltersBedsBaths() {
    const context = useContext(ListingsContext)

    // TODO: (Beds/baths filter) Make sure values are the same
    const [beds, setBeds] = useState<number>(context.searchFilters.beds.value)
    const [baths, setBaths] = useState<number>(context.searchFilters.baths.value)

    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    return (
        <div className="hidden lg:flex">
            <Dropdown props={{
                text: "Beds/Baths",
                display: displayDropdown,
                onClick: () => {
                    setDisplayDropdown(!displayDropdown)
                }
            }}>
                <div className="flex w-64 flex-col gap-5 lg:w-72">
                    <ButtonsSegmentedLabelled label="Beds"
                        values={BEDS_BATHS_FILTER}
                        activeIndex={beds}
                        onCick={(index) => {
                            setBeds(index)
                        }} />
                    <ButtonsSegmentedLabelled label="Baths"
                        values={BEDS_BATHS_FILTER}
                        activeIndex={baths}
                        onCick={(index) => {
                            setBaths(index)
                        }} />
                    <div className="flex justify-evenly">
                        <ButtonSmallText text="Reset"
                            onClick={() => {
                                setBeds(BEDS_BATHS_DEFAULT)
                                setBaths(BEDS_BATHS_DEFAULT)
                            }} />
                        <ButtonSmallFilled text="Search"
                            onClick={() => {
                                // Close dropdown ...
                                setDisplayDropdown(false)

                                // ... change filter values
                                context.searchFilters.beds.change(beds)
                                context.searchFilters.baths.change(baths)
                            }} />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
