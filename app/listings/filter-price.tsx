"use client"

import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import FormInput from "@/components/form-input"
import { NumberUtils } from "@/lib/commons/number_utils"
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency"
import { customizePriceValidator } from "@/lib/validation/listing/validators"
import { useContext, useEffect, useState } from "react"
import { ZodNumber } from "zod"
import { PRICE_MAX_FILTER, PRICE_MIN_FILTER } from "./constants"
import { ListingsContext } from "./provider"

export default function ListingsFilterPrice() {
    const priceMaxPlaceholder = CURRENCY_FORMATTER.format(PRICE_MAX_FILTER)

    const context = useContext(ListingsContext)
    const contextPriceMin = context.searchFilters.price.min.value
    const contextPriceMax = context.searchFilters.price.max.value

    const [priceMin, setPriceMin] = useState<number>(contextPriceMin)
    const [priceMax, setPriceMax] = useState<number>(contextPriceMax)

    const [priceMinError, setPriceMinError] = useState<string | undefined>(undefined)
    const [priceMaxError, setPriceMaxError] = useState<string | undefined>(undefined)

    const defaultValidator = customizePriceValidator(PRICE_MIN_FILTER, PRICE_MAX_FILTER)
    const [priceMinValidator, setPriceMinValidator] = useState<ZodNumber>(defaultValidator)
    const [priceMaxValidator, setPriceMaxValidator] = useState<ZodNumber>(defaultValidator)

    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    useEffect(() => {
        setPriceMin(contextPriceMin)
    }, [contextPriceMin])

    useEffect(() => {
        setPriceMax(contextPriceMax)
    }, [contextPriceMax])

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
                        placeholder="None"
                        value={priceMin}
                        min={PRICE_MIN_FILTER}
                        max={priceMax}
                        errorMessage={priceMinError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = priceMinValidator.safeParse(value)

                            if (result.success) {
                                setPriceMinError(undefined)
                                setPriceMaxValidator(customizePriceValidator(value, PRICE_MAX_FILTER))
                                setPriceMin(value)
                            } else {
                                const error = result.error.errors[0].message
                                setPriceMinError(error)
                            }
                        }} />
                    <FormInput label="Maximum Price"
                        name="price-max"
                        type="number"
                        placeholder={priceMaxPlaceholder}
                        value={priceMax}
                        min={priceMin}
                        max={PRICE_MAX_FILTER}
                        errorMessage={priceMaxError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = priceMaxValidator.safeParse(value)

                            if (result.success) {
                                setPriceMaxError(undefined)
                                setPriceMinValidator(customizePriceValidator(PRICE_MIN_FILTER, value))
                                setPriceMax(value)
                            } else {
                                const error = result.error.errors[0].message
                                setPriceMaxError(error)
                            }
                        }} />
                    <div className="flex justify-evenly">
                        <ButtonSmallText text="Reset"
                            onClick={(e) => {
                                // Reset input values ...
                                setPriceMin(PRICE_MIN_FILTER)
                                setPriceMax(PRICE_MAX_FILTER)

                                // ... error messages ...
                                setPriceMinError(undefined)
                                setPriceMaxError(undefined)

                                // ... and validators
                                setPriceMinValidator(defaultValidator)
                                setPriceMaxValidator(defaultValidator)
                            }} />
                        <ButtonSmallFilled text="Search"
                            onClick={(e) => {
                                // Close dropdown ...
                                setDisplayDropdown(false)

                                // ... change filter values
                                context.searchFilters.price.min.change(priceMin)
                                context.searchFilters.price.max.change(priceMax)
                                setPriceMinError(undefined)
                                setPriceMaxError(undefined)
                            }} />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
