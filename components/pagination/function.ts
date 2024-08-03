/**
 *
 * Show the previous button only if the current page is not the first page
 *
 * @param currentPage Current page
 * @returns `true` if the previous button should be shown, otherwise false.
 */
export function checkShowPreviousButton(currentPage?: number) {
  return currentPage !== undefined && currentPage > 1;
}

/**
 * Show the next button only if the current page is not the last page
 *
 * @param pages Total number of pages
 * @param currentPage Current page
 * @returns `true` if the next button should be shown, otherwise false.
 */
export function checkShowNextButton(pages: number, currentPage?: number) {
  if (currentPage === undefined) {
    if (pages !== 1) {
      return true;
    }
  } else {
    return currentPage < pages;
  }
}
