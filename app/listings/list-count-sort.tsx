"use client"

import { formatAppend } from "@/lib/formatter/number";
import { useContext } from "react";
import { ListingsContext } from "./provider";
import { ListingSort } from "./types";

export interface ListingsListCountSortInterface {
    listingsCount: number
}

export function ListingsListCountSort(props: ListingsListCountSortInterface) {
    const context = useContext(ListingsContext);

    return (
        <div>
            <div className="basis-14 px-5 py-4 block md:flex md:flex-row border-y-[1px] border-gray-200">
                {
                    props.listingsCount > 0 &&
                    <span className="font-bold md:mr-6">
                        {formatAppend(props.listingsCount, "listings")}
                    </span>
                }
                <div>
                    <span className="font-bold mr-1">Sort by</span>
                    <select className="bg-inherit cursor-pointer">
                        <option value={ListingSort.NEWEST}
                            onClick={() => {
                                context.sort.change(ListingSort.NEWEST)
                            }}>
                            {ListingSort.NEWEST}
                        </option>
                        <option value={ListingSort.PRICE_DESC}
                            onClick={() => {
                                context.sort.change(ListingSort.PRICE_DESC)
                            }}>
                            {ListingSort.PRICE_DESC}
                        </option>
                        <option value={ListingSort.PRICE_ASC}
                            onClick={() => {
                                context.sort.change(ListingSort.PRICE_ASC)
                            }}>
                            {ListingSort.PRICE_ASC}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
