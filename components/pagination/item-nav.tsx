import { ReactNode } from "react";

export default function PaginationItemNav({ children }: {
    children: ReactNode
}) {
    return (
        <div className="cursor-pointer rounded-md px-4 py-2 transition-all 
                    bg-slate-50 fill-gray-800 hover:bg-amber-200 hover:shadow-md">
            {children}
        </div>
    )
}