"use client"

import { createContext, useState } from "react"
import { PRICE_MAX_FILTER, PRICE_MIN_FILTER, STARTING_PAGE } from "./constants"

type ContextTypeNumber = {
    value: number,
    change: (value: number) => void
}

interface ListingsContextInterface {
    searchFilters: {
        price: {
            min: ContextTypeNumber,
            max: ContextTypeNumber
        }
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
        }
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
