"use client"

import { createContext, useState } from "react"
import { STARTING_PAGE } from "./constants"

interface ListingsContextInterface {
    pagination: {
        changeToPreviousPage: () => void,
        changeToNextPage: () => void,
        currentPage: {
            value: number,
            change: (page: number) => void
        }
    }
}

export const ListingsContext = createContext<ListingsContextInterface>({
    pagination: {
        changeToPreviousPage: () => { },
        changeToNextPage: () => { },
        currentPage: {
            value: STARTING_PAGE,
            change: (page) => { }
        },
    }
});

export default function ListingsProvider({ children }: { children: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState<number>(STARTING_PAGE);

    const stateValue: ListingsContextInterface = {
        pagination: {
            changeToPreviousPage: () => {
                setCurrentPage(currentPage - 1)
            },
            changeToNextPage: () => {
                setCurrentPage(currentPage + 1)
            },
            currentPage: {
                value: currentPage,
                change: (page: number) => {
                    setCurrentPage(page)
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
