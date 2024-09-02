"use client"

import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import ButtonFilled from "@/components/buttons/filled";
import ButtonText from "@/components/buttons/text";
import FormInput from "@/components/form-input";
import { NumberUtils } from "@/lib/commons/number_utils";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import { formatAppend } from "@/lib/formatter/number";
import { customizeAreaValidator, customizePriceValidator } from "@/lib/validation/listing/validators";
import { useContext, useEffect, useState } from "react";
import { ZodNumber } from "zod";
import { BEDS_BATHS_OPTIONS, DEFAULT_LIST_FILTERS } from "./constants";
import { ListingsContext } from "./provider";
import { BedsBathsOption } from "./types";

interface ListingsSearchFiltersModalContentProps {
    onSearch?: () => void
}

export default function ListingsSearchFiltersModalContent(props: ListingsSearchFiltersModalContentProps) {
    const areaMaxPlaceholder = formatAppend(DEFAULT_LIST_FILTERS.area.max.value, "sqm.")
    const priceMaxPlaceholder = CURRENCY_FORMATTER.format(DEFAULT_LIST_FILTERS.price.max.value)

    // Context values
    const context = useContext(ListingsContext)
    const contextBeds = context.searchFilters.beds.value;
    const contextBaths = context.searchFilters.baths.value;
    const contextAreaMin = context.searchFilters.area.min.value
    const contextAreaMax = context.searchFilters.area.max.value;
    const contextPriceMin = context.searchFilters.price.min.value
    const contextPriceMax = context.searchFilters.price.max.value

    // Local values
    const [beds, setBeds] = useState<BedsBathsOption>(contextBeds)
    const [baths, setBaths] = useState<BedsBathsOption>(contextBaths)
    const [areaMin, setAreaMin] = useState<number>(contextAreaMin)
    const [areaMax, setAreaMax] = useState<number>(contextAreaMax)
    const [priceMin, setPriceMin] = useState<number>(contextPriceMin)
    const [priceMax, setPriceMax] = useState<number>(contextPriceMax)

    // Error messages
    const [areaMinError, setAreaMinError] = useState<string | undefined>(undefined)
    const [areaMaxError, setAreaMaxError] = useState<string | undefined>(undefined)
    const [priceMinError, setPriceMinError] = useState<string | undefined>(undefined)
    const [priceMaxError, setPriceMaxError] = useState<string | undefined>(undefined)

    // Validators
    const defaultAreaValidator = customizeAreaValidator(
        DEFAULT_LIST_FILTERS.area.min.value,
        DEFAULT_LIST_FILTERS.area.max.value
    )
    const [areaMinValidator, setAreaMinValidator] = useState<ZodNumber>(defaultAreaValidator)
    const [areaMaxValidator, setAreaMaxValidator] = useState<ZodNumber>(defaultAreaValidator)
    const defaultPriceValidator = customizePriceValidator(
        DEFAULT_LIST_FILTERS.price.min.value,
        DEFAULT_LIST_FILTERS.price.max.value
    )
    const [priceMinValidator, setPriceMinValidator] = useState<ZodNumber>(defaultPriceValidator)
    const [priceMaxValidator, setPriceMaxValidator] = useState<ZodNumber>(defaultPriceValidator)

    const options = Object.values(BedsBathsOption)

    // Updates the local values when the other filter values also change
    useEffect(() => {
        setBeds(contextBeds)
    }, [contextBeds])

    useEffect(() => {
        setBaths(contextBaths)
    }, [contextBaths])

    useEffect(() => {
        setAreaMin(contextAreaMin)
    }, [contextAreaMin])

    useEffect(() => {
        setAreaMax(contextAreaMax)
    }, [contextAreaMax])

    useEffect(() => {
        setPriceMin(contextPriceMin)
    }, [contextPriceMin])

    useEffect(() => {
        setPriceMax(contextPriceMax)
    }, [contextPriceMax])

    return (
        <div className="flex flex-col gap-16 p-8">
            <div className="flex flex-col gap-8">
                <header className="text-2xl font-bold">
                    Filters
                </header>
                {/* Price */}
                <div className="max-w-[80%] gap-5 md:hidden">
                    <FormInput label="Minimum Price"
                        name="price-min"
                        type="number"
                        placeholder="None"
                        value={priceMin}
                        min={DEFAULT_LIST_FILTERS.price.min.value}
                        max={priceMax}
                        errorMessage={priceMinError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = priceMinValidator.safeParse(value)

                            if (result.success) {
                                setPriceMinError(undefined)
                                setPriceMaxValidator(customizePriceValidator(
                                    value,
                                    DEFAULT_LIST_FILTERS.price.max.value
                                ))
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
                        max={DEFAULT_LIST_FILTERS.price.max.value}
                        errorMessage={priceMaxError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = priceMaxValidator.safeParse(value)

                            if (result.success) {
                                setPriceMaxError(undefined)
                                setPriceMinValidator(customizePriceValidator(
                                    DEFAULT_LIST_FILTERS.price.min.value,
                                    value
                                ))
                                setPriceMax(value)
                            } else {
                                const error = result.error.errors[0].message
                                setPriceMaxError(error)
                            }
                        }} />
                </div>
                <div className="flex flex-col gap-5">
                    <ButtonsSegmentedLabelled label="Beds"
                        values={BEDS_BATHS_OPTIONS}
                        activeIndex={options.indexOf(beds)}
                        onCick={(value, index) => {
                            setBeds(options.at(index)!)
                        }} />
                    <ButtonsSegmentedLabelled label="Baths"
                        values={BEDS_BATHS_OPTIONS}
                        activeIndex={options.indexOf(baths)}
                        onCick={(value, index) => {
                            setBaths(options.at(index)!)
                        }} />
                </div>
                {/* Area */}
                <div className="max-w-[80%] gap-5">
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
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <ButtonText text="Reset"
                    onClick={() => {
                        // Reset beds/baths ...
                        setBeds(DEFAULT_LIST_FILTERS.beds.value)
                        setBaths(DEFAULT_LIST_FILTERS.baths.value)

                        // ... area ...
                        setAreaMin(DEFAULT_LIST_FILTERS.area.min.value)
                        setAreaMax(DEFAULT_LIST_FILTERS.area.max.value)
                        setAreaMinError(undefined)
                        setAreaMaxError(undefined)

                        // ... price
                        setPriceMin(DEFAULT_LIST_FILTERS.price.min.value)
                        setPriceMax(DEFAULT_LIST_FILTERS.price.max.value)
                        setPriceMinError(undefined)
                        setPriceMaxError(undefined)
                    }} />
                <ButtonFilled text="Search"
                    onClick={() => {
                        // Update beds/baths ...
                        context.searchFilters.beds.change(beds)
                        context.searchFilters.baths.change(baths)

                        // ... area ...
                        context.searchFilters.area.min.change(areaMin)
                        context.searchFilters.area.max.change(areaMax)
                        setAreaMinError(undefined)
                        setAreaMaxError(undefined)

                        // ... price
                        context.searchFilters.price.min.change(priceMin)
                        context.searchFilters.price.max.change(priceMax)
                        setPriceMinError(undefined)
                        setPriceMaxError(undefined)

                        if (props.onSearch) {
                            props.onSearch()
                        }
                    }} />
            </div>
        </div>
    );
}
