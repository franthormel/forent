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
import { AREA_MAX_FILTER, AREA_MIN_FILTER, BEDS_BATHS_DEFAULT, BEDS_BATHS_FILTER, PRICE_MAX_FILTER, PRICE_MIN_FILTER } from "./constants";
import { ListingsContext } from "./provider";

interface ListingsSearchFiltersModalContentProps {
    onSearch?: () => void
}

export default function ListingsSearchFiltersModalContent(props: ListingsSearchFiltersModalContentProps) {
    const areaMaxPlaceholder = formatAppend(AREA_MAX_FILTER, "sqm.")
    const priceMaxPlaceholder = CURRENCY_FORMATTER.format(PRICE_MAX_FILTER)

    // Context values
    const context = useContext(ListingsContext)
    const contextBeds = context.searchFilters.beds.value;
    const contextBaths = context.searchFilters.baths.value;
    const contextAreaMin = context.searchFilters.area.min.value
    const contextAreaMax = context.searchFilters.area.max.value;
    const contextPriceMin = context.searchFilters.price.min.value
    const contextPriceMax = context.searchFilters.price.max.value

    // Local values
    const [beds, setBeds] = useState<number>(contextBeds)
    const [baths, setBaths] = useState<number>(contextBaths)
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
    const defaultAreaValidator = customizeAreaValidator(AREA_MIN_FILTER, AREA_MAX_FILTER)
    const [areaMinValidator, setAreaMinValidator] = useState<ZodNumber>(defaultAreaValidator)
    const [areaMaxValidator, setAreaMaxValidator] = useState<ZodNumber>(defaultAreaValidator)
    const defaultPriceValidator = customizePriceValidator(PRICE_MIN_FILTER, PRICE_MAX_FILTER)
    const [priceMinValidator, setPriceMinValidator] = useState<ZodNumber>(defaultPriceValidator)
    const [priceMaxValidator, setPriceMaxValidator] = useState<ZodNumber>(defaultPriceValidator)

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
                </div>
                <div className="flex flex-col gap-5">
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
                </div>
                {/* Area */}
                <div className="max-w-[80%] gap-5">
                    <FormInput label="Minimum Area"
                        name="area-min"
                        type="number"
                        placeholder="None"
                        value={areaMin}
                        min={AREA_MIN_FILTER}
                        max={areaMax}
                        errorMessage={areaMinError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = areaMinValidator.safeParse(value)

                            if (result.success) {
                                setAreaMinError(undefined)
                                setAreaMaxValidator(customizeAreaValidator(value, AREA_MAX_FILTER))
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
                        max={AREA_MAX_FILTER}
                        errorMessage={areaMaxError}
                        onChange={(e) => {
                            const value = NumberUtils.toNumber(e.target.value, -1)
                            const result = areaMaxValidator.safeParse(value)

                            if (result.success) {
                                setAreaMaxError(undefined)
                                setAreaMinValidator(customizeAreaValidator(AREA_MIN_FILTER, value))
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
                        setBeds(BEDS_BATHS_DEFAULT)
                        setBaths(BEDS_BATHS_DEFAULT)

                        // ... area ...
                        setAreaMin(AREA_MIN_FILTER)
                        setAreaMax(AREA_MAX_FILTER)
                        setAreaMinError(undefined)
                        setAreaMaxError(undefined)

                        // ... price
                        setPriceMin(PRICE_MIN_FILTER)
                        setPriceMax(PRICE_MAX_FILTER)
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
