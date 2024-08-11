import { checkNextButton, checkPreviousButton } from "./function"
import PaginationItemNav from "./item-nav"
import PaginationItemNumber from "./item-number"

export interface PaginationProps {
    pages: number
    currentPage: number
    changeToPreviousPage?: () => void
    changeCurrentPage?: (page: number) => void
    changeToNextPage?: () => void
}

export default function Pagination(props: PaginationProps) {
    const pageNumbers = Array.from({ length: props.pages }, (elem, i) => i + 1)
    const previousButtonEnabled = checkPreviousButton(props.currentPage);
    const nextButtonEnabled = checkNextButton(props.pages, props.currentPage);

    return (
        // NOTE: This component will consume the entire width if there are too many pages. This might break flex layouts in smaller screens.
        <div className="flex gap-3">
            {/* Previous (hidden if the current page is the first page) */}
            <div className={`${previousButtonEnabled ? 'visible' : 'invisible'}`}
                onClick={(e) => {
                    if (props.changeToPreviousPage && previousButtonEnabled) {
                        props.changeToPreviousPage()
                    }
                }}>
                <PaginationItemNav>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960">
                        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                    </svg>
                </PaginationItemNav>
            </div>
            {pageNumbers.map((pageNumber) => {
                const isCurrentPage = props.currentPage === pageNumber
                return (
                    <div key={pageNumber}
                        onClick={(e) => {
                            if (props.changeCurrentPage) {
                                props.changeCurrentPage(pageNumber);
                            }
                        }}>
                        <PaginationItemNumber
                            page={pageNumber}
                            isCurrentPage={isCurrentPage}
                        />
                    </div>
                )
            })}
            {/* Next (hidden if current page is the last page) */}
            <div className={`${nextButtonEnabled ? 'visible' : 'invisible'}`}
                onClick={(e) => {
                    if (props.changeToNextPage && nextButtonEnabled) {
                        props.changeToNextPage()
                    }
                }}>
                <PaginationItemNav>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </PaginationItemNav>
            </div>
        </div>
    )
}
