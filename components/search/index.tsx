"use client"

import searchIcon from "@/public/icon/search.svg"
import Image from 'next/image'
import { useState } from 'react'

type SearchWidth = "small" | "regular" | "large"
interface SearchProps {
    onSubmit?: Function
    placeholder?: string
    /**
     * Default is 'regular'
     */
    width?: SearchWidth
    dataCyInput?: string
    dataCyButtonIcon?: string
}

export default function Search(props: SearchProps) {
    const action = () => searchAction(props.onSubmit)
    const [searchValue, setSearchValue] = useState('')
    const width = searchWidth(props.width)
    const dataCyInput = props.dataCyInput ?? "searchInput";
    const dataCyButtonIcon = props.dataCyButtonIcon ?? "searchButtonIcon";

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
            <Image
                className='ml-4 bg-slate-50 hover:cursor-pointer'
                alt="Search"
                data-cy={dataCyButtonIcon}
                src={searchIcon}
                onClick={action}
            />
        </div>
    )
}

export function searchAction(func?: Function) {
    if (func) {
        func()
    } else {
        console.log("Searchbar not working 🙀!")
    }
}

export function searchWidth(width?: SearchWidth): string {
    let value

    switch (width) {
        case 'small': value = "w-52"; break
        case 'large': value = "w-96"; break
        default: value = "w-72"; break
    }

    return value
}

// TODO:
// 1. fix cypress (all)
// 2. cypress (this)
// 3. jest (this)
// 4. check
