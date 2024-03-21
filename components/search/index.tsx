"use client"

import { useState } from 'react'
import ButtonIconSearch from '../button-icons/search'
import { searchAction, searchWidth } from "./functions"
import { SearchWidth } from "./type"

interface SearchProps {
    dataCyInput?: string
    dataCyButtonIconSearch?: string
    placeholder?: string
    /**
     * Default is 'regular'
     */
    width?: SearchWidth
    onSubmit?: Function
}

export default function Search(props: SearchProps) {
    const action = () => searchAction(props.onSubmit)
    const [searchValue, setSearchValue] = useState('')
    const width = searchWidth(props.width)
    const dataCyInput = props.dataCyInput ?? "search-input";
    const dataCyButtonIcon = props.dataCyButtonIconSearch ?? "search-btn-icon";

    // if drop shadow is removed, outline must be added
    return (
        <div className="flex w-fit justify-between rounded-full bg-slate-50 px-6 py-0 shadow-md">
            <input type='search'
                autoCapitalize='none'
                data-cy={dataCyInput}
                maxLength={128}
                placeholder={props.placeholder}
                spellCheck='false'
                className={`bg-slate-50 focus:outline-none ${width} h-12`}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    const key = e.key.toLowerCase()
                    const code = e.code.toLowerCase()

                    if (key.includes("enter") && code.includes("enter")) {
                        action()
                    }
                }}
            />
            <ButtonIconSearch onClick={action} dataCy={dataCyButtonIcon} />
        </div>
    )
}
