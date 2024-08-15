"use client"

import ButtonSmallFilled from "@/components/buttons/small/filled"
import ButtonSmallText from "@/components/buttons/small/text"
import Dropdown from "@/components/dropdown"
import FormInput from "@/components/form-input"
import { formatAppend } from "@/lib/formatter/number"
import { useState } from "react"

export default function ListingsFilterArea() {
    const DEFAULT_MAX = 20

    const minAreaPlaceholder = "None"
    const maxAreaPlaceholder = formatAppend(DEFAULT_MAX, "sqm.")

    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)

    return (
        <div className="hidden lg:flex">
            <Dropdown props={{
                text: "Area",
                display: displayDropdown,
                onClick: () => {
                    setDisplayDropdown(!displayDropdown)
                }
            }}>
                <div className="flex w-24 flex-col gap-5 xl:w-56">
                    <FormInput label="Minimum Area"
                        name="area-min"
                        placeholder={minAreaPlaceholder} />
                    <FormInput label="Maximum Area"
                        name="area-min"
                        placeholder={maxAreaPlaceholder} />
                    <div className="flex flex-col gap-3 xl:hidden">
                        <ButtonSmallText text="Reset" />
                        <ButtonSmallFilled text="Search" />
                    </div>
                    <div className="hidden justify-evenly xl:flex">
                        <ButtonSmallText text="Reset" />
                        <ButtonSmallFilled text="Search" />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
