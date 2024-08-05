import { checkShowNextButton, checkShowPreviousButton } from "./function"
import PaginationItemNav from "./item-nav"
import PaginationItemNumber from "./item-number"

export interface PaginationProps {
    pages: number
    currentPage: number
}

export default function Pagination(props: PaginationProps) {
    const pageNumbers = Array.from({ length: props.pages }, (elem, i) => i + 1)
    const showPreviousButton = checkShowPreviousButton(props.currentPage);
    const showNextButton = checkShowNextButton(props.pages, props.currentPage);

    return (
        <div className="flex gap-3">
            {/* Previous (hidden if the current page is the first page) */}
            {showPreviousButton &&
                <PaginationItemNav>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960">
                        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                    </svg>
                </PaginationItemNav>
            }
            {pageNumbers.map((pageNumber) => {
                const isCurrentPage = props.currentPage === pageNumber
                return <PaginationItemNumber
                    page={pageNumber}
                    key={pageNumber}
                    isCurrentPage={isCurrentPage}
                />
            })}
            {/* Next (hidden if current page is the last page) */}
            {showNextButton &&
                <PaginationItemNav>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </PaginationItemNav>
            }
        </div>
    )
}
