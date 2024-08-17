"use client"

import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import FormInput from "@/components/form-input"
import { NumberUtils } from "@/lib/commons/number_utils"
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency"
import { customizePriceValidator } from "@/lib/validation/listing/validators"
import { useContext, useState } from "react"
import { ZodNumber } from "zod"
import { PRICE_MAX_FILTER, PRICE_MIN_FILTER } from "./constants"
import { ListingsContext } from "./provider"

export default function ListingsFilterPrice() {
    const minPricePlaceholder = "None"
    const maxPricePlaceholder = CURRENCY_FORMATTER.format(PRICE_MAX_FILTER)

    const [minPrice, setMinPrice] = useState<number>(PRICE_MIN_FILTER)
    const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX_FILTER)

    const [minPriceError, setMinPriceError] = useState<string | undefined>(undefined)
    const [maxPriceError, setMaxPriceError] = useState<string | undefined>(undefined)

    const defaultValidator = customizePriceValidator(PRICE_MIN_FILTER, PRICE_MAX_FILTER)
    const [minPriceValidator, setMinPriceValidator] = useState<ZodNumber>(defaultValidator)
    const [maxPriceValidator, setMaxPriceValidator] = useState<ZodNumber>(defaultValidator)

    const context = useContext(ListingsContext)
    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    return (
        <div className="hidden md:flex">
            <Dropdown props={{
                text: "Price",
                display: displayDropdown,
                onClick: () => {
                    setDisplayDropdown(!displayDropdown)
                }
            }}>
                <div className="flex flex-col gap-5 md:w-48 lg:w-64">
                    <FormInput label="Minimum Price"
                        name="price-min"
                        type="number"
                        placeholder={minPricePlaceholder}
                        value={minPrice}
                        min={PRICE_MIN_FILTER}
                        max={maxPrice}
                        errorMessage={minPriceError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = minPriceValidator.safeParse(value)

                            if (result.success) {
                                setMinPriceError(undefined)
                                // Only change value if validation is successful
                                setMaxPriceValidator(customizePriceValidator(value, PRICE_MAX_FILTER))
                                setMinPrice(value)
                            } else {
                                // Only change if it is a different error message
                                const error = result.error.errors[0].message
                                setMinPriceError(error)
                            }
                        }} />
                    <FormInput label="Maximum Price"
                        name="price-max"
                        type="number"
                        placeholder={maxPricePlaceholder}
                        value={maxPrice}
                        min={minPrice}
                        max={PRICE_MAX_FILTER}
                        errorMessage={maxPriceError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = maxPriceValidator.safeParse(value)

                            if (result.success) {
                                setMaxPriceError(undefined)
                                // Only change value if validation is successful
                                setMinPriceValidator(customizePriceValidator(PRICE_MIN_FILTER, value))
                                setMaxPrice(value)
                            } else {
                                const error = result.error.errors[0].message
                                setMaxPriceError(error)
                            }
                        }} />
                    <div className="flex justify-evenly">
                        <ButtonSmallText text="Reset"
                            onClick={(e) => {
                                // Reset input values ...
                                setMinPrice(PRICE_MIN_FILTER)
                                setMaxPrice(PRICE_MAX_FILTER)

                                // ... error messages ...
                                setMinPriceError(undefined)
                                setMaxPriceError(undefined)

                                // ... and validators
                                setMinPriceValidator(defaultValidator)
                                setMaxPriceValidator(defaultValidator)
                            }} />
                        <ButtonSmallFilled text="Search"
                            onClick={(e) => {
                                // Close dropdown ...
                                setDisplayDropdown(false)

                                // ... change filter values
                                context.searchFilters.price.min.change(minPrice)
                                context.searchFilters.price.max.change(maxPrice)
                            }} />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
