/**
 *
 * Enable the previous button only if the current page is not the first page
 *
 * @param currentPage Current page
 * @returns `true` if the previous button should be enabled, otherwise false.
 */
export function checkPreviousButton(currentPage: number) {
  return currentPage > 1;
}

/**
 * Enable the next button only if the current page is not the last page
 *
 * @param pages Total number of pages
 * @param currentPage Current page
 * @returns `true` if the next button should be enabled, otherwise false.
 */
export function checkNextButton(pages: number, currentPage: number) {
  return currentPage < pages;
}
