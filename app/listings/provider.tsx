"use client"

import { createContext, useState } from "react"
import { AREA_MAX_FILTER, AREA_MIN_FILTER, BEDS_BATHS_DEFAULT, PRICE_MAX_FILTER, PRICE_MIN_FILTER, STARTING_PAGE } from "./constants"

type ContextTypeNumber = {
    value: number,
    change: (value: number) => void
}

type ContenTypeNumberRange = {
    min: ContextTypeNumber,
    max: ContextTypeNumber
}

interface ListingsContextInterface {
    searchFilters: {
        price: ContenTypeNumberRange,
        beds: ContextTypeNumber,
        baths: ContextTypeNumber,
        area: ContenTypeNumberRange
    },
    pagination: {
        changeToPreviousPage: () => void,
        changeToNextPage: () => void,
        currentPage: ContextTypeNumber
    }
}

export const ListingsContext = createContext<ListingsContextInterface>({
    searchFilters: {
        price: {
            min: {
                value: PRICE_MIN_FILTER,
                change: (value) => { }
            },
            max: {
                value: PRICE_MAX_FILTER,
                change: (value) => { }
            }
        },
        beds: {
            value: BEDS_BATHS_DEFAULT,
            change: (value) => { }
        },
        baths: {
            value: BEDS_BATHS_DEFAULT,
            change: (value) => { }
        },
        area: {
            min: {
                value: AREA_MIN_FILTER,
                change: (value) => { }
            },
            max: {
                value: AREA_MAX_FILTER,
                change: (value) => { }
            }
        },
    },
    pagination: {
        changeToPreviousPage: () => { },
        changeToNextPage: () => { },
        currentPage: {
            value: STARTING_PAGE,
            change: (value) => { }
        },
    }
});

export default function ListingsProvider({ children }: { children: React.ReactNode }) {
    const [minPriceFilter, setMinPriceFilter] = useState<number>(PRICE_MIN_FILTER)
    const [maxPriceFilter, setMaxPriceFilter] = useState<number>(PRICE_MAX_FILTER)

    const [bedsFilter, setBedsFilter] = useState<number>(BEDS_BATHS_DEFAULT)
    const [bathsFilter, setBathsFilter] = useState<number>(BEDS_BATHS_DEFAULT)

    const [minAreaFilter, setMinAreaFilter] = useState<number>(AREA_MIN_FILTER)
    const [maxAreaFilter, setMaxAreaFilter] = useState<number>(AREA_MAX_FILTER)

    const [currentPage, setCurrentPage] = useState<number>(STARTING_PAGE);

    const stateValue: ListingsContextInterface = {
        searchFilters: {
            price: {
                min: {
                    value: minPriceFilter,
                    change: (value: number) => {
                        setMinPriceFilter(value)
                    },
                },
                max: {
                    value: maxPriceFilter,
                    change: (value: number) => {
                        setMaxPriceFilter(value)
                    },
                },
            },
            beds: {
                value: bedsFilter,
                change: (value) => {
                    setBedsFilter(value)
                }
            },
            baths: {
                value: bathsFilter,
                change: (value) => {
                    setBathsFilter(value)
                }
            },
            area: {
                min: {
                    value: minAreaFilter,
                    change: (value) => {
                        setMinAreaFilter(value)
                    }
                },
                max: {
                    value: maxAreaFilter,
                    change: (value) => {
                        setMaxAreaFilter(value)
                    }
                }
            }
        },
        pagination: {
            changeToPreviousPage: () => {
                setCurrentPage(currentPage - 1)
            },
            changeToNextPage: () => {
                setCurrentPage(currentPage + 1)
            },
            currentPage: {
                value: currentPage,
                change: (value: number) => {
                    setCurrentPage(value)
                },
            }
        }
    }

    return (
        <ListingsContext.Provider value={stateValue}>
            {children}
        </ListingsContext.Provider>
    )
}
