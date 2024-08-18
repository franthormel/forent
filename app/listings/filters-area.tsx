"use client"

import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import FormInput from "@/components/form-input"
import { NumberUtils } from "@/lib/commons/number_utils"
import { formatAppend } from "@/lib/formatter/number"
import { customizeAreaValidator } from "@/lib/validation/listing/validators"
import { useContext, useState } from "react"
import { ZodNumber } from "zod"
import { AREA_MAX_FILTER, AREA_MAX_INPUT, AREA_MIN_FILTER } from "./constants"
import { ListingsContext } from "./provider"

export default function ListingsFilterArea() {
    const maxAreaPlaceholder = formatAppend(AREA_MAX_INPUT, "sqm.")

    const context = useContext(ListingsContext)

    // TODO: (Area filter) Make sure values are the same
    const [minArea, setMinArea] = useState<number>(context.searchFilters.area.min.value)
    const [maxArea, setMaxArea] = useState<number>(context.searchFilters.area.max.value)

    const [minAreaError, setMinAreaError] = useState<string | undefined>(undefined)
    const [maxAreaError, setMaxAreaError] = useState<string | undefined>(undefined)

    const defaultValidator = customizeAreaValidator(AREA_MIN_FILTER, AREA_MAX_FILTER)
    const [minAreaValidator, setMinAreaValidator] = useState<ZodNumber>(defaultValidator)
    const [maxAreaValidator, setMaxAreaValidator] = useState<ZodNumber>(defaultValidator)

    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    return (
        <div className="hidden lg:flex">
            <Dropdown props={{
                text: "Area",
                display: displayDropdown,
                onClick: () => {
                    setDisplayDropdown(!displayDropdown)
                }
            }}>
                <div className="flex w-24 flex-col gap-5 xl:w-56">
                    <FormInput label="Minimum Area"
                        name="area-min"
                        type="number"
                        placeholder="None"
                        value={minArea}
                        min={AREA_MIN_FILTER}
                        max={maxArea}
                        errorMessage={minAreaError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = minAreaValidator.safeParse(value)

                            if (result.success) {
                                setMinAreaError(undefined)
                                setMaxAreaValidator(customizeAreaValidator(value, AREA_MAX_FILTER))
                                setMinArea(value)
                            } else {
                                const error = result.error.errors[0].message
                                setMinAreaError(error)
                            }
                        }} />
                    <FormInput label="Maximum Area"
                        name="area-min"
                        type="number"
                        placeholder={maxAreaPlaceholder}
                        value={maxArea}
                        min={minArea}
                        max={AREA_MAX_FILTER}
                        errorMessage={maxAreaError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = maxAreaValidator.safeParse(value)

                            if (result.success) {
                                setMaxAreaError(undefined)
                                setMinAreaValidator(customizeAreaValidator(AREA_MIN_FILTER, value))
                                setMaxArea(value)
                            } else {
                                const error = result.error.errors[0].message
                                setMaxAreaError(error)
                            }
                        }} />
                    <div className="flex flex-col gap-3 xl:flex-row xl:justify-evenly xl:gap-0">
                        <ButtonSmallText text="Reset"
                            onClick={(e) => {
                                // Reset input values ...
                                setMinArea(AREA_MIN_FILTER)
                                setMaxArea(AREA_MAX_FILTER)

                                // ... error messages ...
                                setMinAreaError(undefined)
                                setMaxAreaError(undefined)

                                // ... and validators
                                setMinAreaValidator(defaultValidator)
                                setMaxAreaValidator(defaultValidator)
                            }} />
                        <ButtonSmallFilled text="Search"
                            onClick={(e) => {
                                // Close dropdown ...
                                setDisplayDropdown(false)

                                // ... error messages ...
                                setMinAreaError(undefined)
                                setMaxAreaError(undefined)

                                // ... change filter values
                                context.searchFilters.area.min.change(minArea)
                                context.searchFilters.area.max.change(maxArea)
                            }} />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
