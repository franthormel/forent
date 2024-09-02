export interface PaginationItemNumberProps {
    page: number
    isCurrentPage?: boolean
}

export default function PaginationItemNumber(props: PaginationItemNumberProps) {
    return (
        <div className={`cursor-pointer rounded-md px-4 py-2 transition-all 
                ${props.isCurrentPage ?
                // Current page
                'bg-amber-400 font-bold shadow-md' :
                // Other pages
                'bg-slate-50 hover:bg-amber-200 hover:shadow-md'}`}>
            {props.page}
        </div>
    )
}
