"use client"

import { createContext } from "react"
import { STARTING_PAGE } from "./constants"

export interface ListingsContextInterface {
    pagination: {
        currentPage: number
    }
}

const INITIAL_STATE: ListingsContextInterface = {
    pagination: {
        currentPage: STARTING_PAGE
    }
}

export const ListingsContext = createContext<ListingsContextInterface>(INITIAL_STATE);

export default function ListingsProvider({ children }: { children: React.ReactNode }) {
    return (
        <ListingsContext.Provider value={INITIAL_STATE}>
            {children}
        </ListingsContext.Provider>
    )
}
