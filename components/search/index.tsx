"use client"

import { useState } from 'react'
import ButtonIconSearch from '../button-icons/search'
import { searchAction } from "./functions"

interface SearchProps {
    dataCyInput?: string
    dataCyButtonIcon?: string
    placeholder?: string
    onSubmit?: Function
}

export default function Search(props: SearchProps) {
    const action = () => searchAction(props.onSubmit)
    const [searchValue, setSearchValue] = useState('')
    const dataCyInput = props.dataCyInput ?? "search-input";
    const dataCyButtonIcon = props.dataCyButtonIcon ?? "search-btn-icon";

    return (
        <div className="flex justify-between rounded-full bg-slate-50 px-6 py-0 outline outline-1 outline-gray-800">
            <input type='search'
                autoCapitalize='none'
                data-cy={dataCyInput}
                maxLength={128}
                placeholder={props.placeholder}
                spellCheck='false'
                className="mr-2 h-14 w-full bg-slate-50 focus:outline-none"
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
