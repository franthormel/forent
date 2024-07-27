import PaginationItemNav from "./item-nav"
import PaginationItemNumber from "./item-number"

export interface PaginationProps {
    pages: number
    /**
     * Current page defaults to `1` if no value is provided.
     */
    currentPage?: number
}

// TODO: Style when many pages (need to break it somewhere, must work for all screen screens)
export default function Pagination(props: PaginationProps) {
    const pageNumbers = Array.from({ length: props.pages }, (elem, i) => i + 1)
    // Show the previous button only if the current page is not the first page
    // TODO: Move to function then unit test
    const showPreviousButton = props.currentPage && props.currentPage > 1
    // Show the next button only if the current page is not the last page
    // TODO: Move to function then unit test
    let showNextButton = false;
    if (props.currentPage === undefined) {
        if (props.pages !== 1) {
            showNextButton = true;
        }
    } else {
        showNextButton = props.currentPage < props.pages;
    }

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
