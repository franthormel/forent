"use client"

import { createContext, useState } from "react"
import { DEFAULT_LIST_FILTERS, STARTING_PAGE } from "./constants"
import { BedsBathsOption, ListingContextType, ListingSort, ListingsSearchFilters } from "./types"

interface ListingsContextInterface {
    searchFilters: ListingsSearchFilters,
    sort: {
        value: ListingSort,
        change: (value: ListingSort) => void
    },
    pagination: {
        changeToPreviousPage: () => void,
        changeToNextPage: () => void,
        currentPage: ListingContextType<number>
    },
}

export const ListingsContext = createContext<ListingsContextInterface>({
    searchFilters: DEFAULT_LIST_FILTERS,
    sort: {
        value: ListingSort.NEWEST,
        change: (value: ListingSort) => { }
    },
    pagination: {
        changeToPreviousPage: () => { },
        changeToNextPage: () => { },
        currentPage: {
            value: STARTING_PAGE,
            change: (value) => { }
        },
    },
});

export default function ListingsProvider({ children }: { children: React.ReactNode }) {
    const [minPriceFilter, setMinPriceFilter] = useState<number>(DEFAULT_LIST_FILTERS.price.min.value)
    const [maxPriceFilter, setMaxPriceFilter] = useState<number>(DEFAULT_LIST_FILTERS.price.max.value)

    const [bedsFilter, setBedsFilter] = useState<BedsBathsOption>(DEFAULT_LIST_FILTERS.beds.value)
    const [bathsFilter, setBathsFilter] = useState<BedsBathsOption>(DEFAULT_LIST_FILTERS.baths.value)

    const [minAreaFilter, setMinAreaFilter] = useState<number>(DEFAULT_LIST_FILTERS.area.min.value)
    const [maxAreaFilter, setMaxAreaFilter] = useState<number>(DEFAULT_LIST_FILTERS.area.max.value)

    const [listingSort, setListingSort] = useState<ListingSort>(ListingSort.NEWEST)

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
        sort: {
            value: listingSort,
            change: (value) => {
                setListingSort(value)
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
        },
    }

    return (
        <ListingsContext.Provider value={stateValue}>
            {children}
        </ListingsContext.Provider>
    )
}
