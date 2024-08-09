export function countListingsToSkip(currentPage: number, countPerPage: number) {
  return (currentPage - 1) * countPerPage;
}
