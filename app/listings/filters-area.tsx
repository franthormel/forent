"use client"

import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import FormInput from "@/components/form-input"
import { NumberUtils } from "@/lib/commons/number_utils"
import { formatAppend } from "@/lib/formatter/number"
import { customizeAreaValidator } from "@/lib/validation/listing/validators"
import { useContext, useEffect, useState } from "react"
import { ZodNumber } from "zod"
import { DEFAULT_LIST_FILTERS } from "./constants"
import { ListingsContext } from "./provider"

export default function ListingsFilterArea() {
    const areaMaxPlaceholder = formatAppend(DEFAULT_LIST_FILTERS.area.max.value, "sqm.")

    const context = useContext(ListingsContext)
    const contextAreaMin = context.searchFilters.area.min.value
    const contextAreaMax = context.searchFilters.area.max.value;

    const [areaMin, setAreaMin] = useState<number>(contextAreaMin)
    const [areaMax, setAreaMax] = useState<number>(contextAreaMax)

    const [areaMinError, setAreaMinError] = useState<string | undefined>(undefined)
    const [areaMaxError, setAreaMaxError] = useState<string | undefined>(undefined)

    const defaultValidator = customizeAreaValidator(
        DEFAULT_LIST_FILTERS.area.min.value,
        DEFAULT_LIST_FILTERS.area.max.value
    )
    const [areaMinValidator, setAreaMinValidator] = useState<ZodNumber>(defaultValidator)
    const [areaMaxValidator, setAreaMaxValidator] = useState<ZodNumber>(defaultValidator)

    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    useEffect(() => {
        setAreaMin(contextAreaMin)
    }, [contextAreaMin])

    useEffect(() => {
        setAreaMax(contextAreaMax)
    }, [contextAreaMax])

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
                        value={areaMin}
                        min={DEFAULT_LIST_FILTERS.area.min.value}
                        max={areaMax}
                        errorMessage={areaMinError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = areaMinValidator.safeParse(value)

                            if (result.success) {
                                setAreaMinError(undefined)
                                setAreaMaxValidator(customizeAreaValidator(
                                    value,
                                    DEFAULT_LIST_FILTERS.area.max.value
                                ))
                                setAreaMin(value)
                            } else {
                                const error = result.error.errors[0].message
                                setAreaMinError(error)
                            }
                        }} />
                    <FormInput label="Maximum Area"
                        name="area-max"
                        type="number"
                        placeholder={areaMaxPlaceholder}
                        value={areaMax}
                        min={areaMin}
                        max={DEFAULT_LIST_FILTERS.area.max.value}
                        errorMessage={areaMaxError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = areaMaxValidator.safeParse(value)

                            if (result.success) {
                                setAreaMaxError(undefined)
                                setAreaMinValidator(customizeAreaValidator(
                                    DEFAULT_LIST_FILTERS.area.min.value,
                                    value
                                ))
                                setAreaMax(value)
                            } else {
                                const error = result.error.errors[0].message
                                setAreaMaxError(error)
                            }
                        }} />
                    <div className="flex flex-col gap-3 xl:flex-row xl:justify-evenly xl:gap-0">
                        <ButtonSmallText text="Reset"
                            onClick={(e) => {
                                // Reset input values ...
                                setAreaMin(DEFAULT_LIST_FILTERS.area.min.value)
                                setAreaMax(DEFAULT_LIST_FILTERS.area.max.value)

                                // ... error messages ...
                                setAreaMinError(undefined)
                                setAreaMaxError(undefined)

                                // ... and validators
                                setAreaMinValidator(defaultValidator)
                                setAreaMaxValidator(defaultValidator)
                            }} />
                        <ButtonSmallFilled text="Search"
                            onClick={(e) => {
                                // Close dropdown ...
                                setDisplayDropdown(false)

                                // ... error messages ...
                                setAreaMinError(undefined)
                                setAreaMaxError(undefined)

                                // ... change filter values
                                context.searchFilters.area.min.change(areaMin)
                                context.searchFilters.area.max.change(areaMax)
                            }} />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
