import { countListingsToSkip } from "../../app/listings/function";

describe("Listings", () => {
  test.each([
    { currentPage: 1, countPerPage: 20, expected: 0 },
    { currentPage: 2, countPerPage: 30, expected: 30 },
    { currentPage: 3, countPerPage: 40, expected: 80 },
    { currentPage: 4, countPerPage: 50, expected: 150 },
    { currentPage: 5, countPerPage: 60, expected: 240 },
    { currentPage: 12, countPerPage: 55, expected: 605 },
    { currentPage: 22, countPerPage: 25, expected: 525 },
    { currentPage: 29, countPerPage: 32, expected: 896 },
    { currentPage: 99, countPerPage: 44, expected: 4312 },
  ])(
    "countListingsToSkip($currentPage, $countPerPage)",
    ({ currentPage, countPerPage, expected }) => {
      const output = countListingsToSkip(currentPage, countPerPage);
      expect(output).toBe(expected);
    }
  );
});
