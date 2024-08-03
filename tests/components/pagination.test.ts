import {
  checkShowNextButton,
  checkShowPreviousButton,
} from "../../components/pagination/function";

describe("Pagination", () => {
  test.each([
    { currentPage: -1, expected: false },
    { currentPage: 0, expected: false },
    { currentPage: 1, expected: false },
    { currentPage: 99, expected: true },
    { currentPage: NaN, expected: false },
    { currentPage: undefined, expected: false },
  ])("checkShowPreviousButton($currentPage)", ({ currentPage, expected }) => {
    const output = checkShowPreviousButton(currentPage);
    expect(output).toBe(expected);
  });

  test.each([
    { pages: 100, currentPage: -1, expected: true },
    { pages: 100, currentPage: 0, expected: true },
    { pages: 100, currentPage: 1, expected: true },
    { pages: 100, currentPage: 99, expected: true },
    { pages: 100, currentPage: 100, expected: false },
    { pages: 100, currentPage: 101, expected: false },
    { pages: 100, currentPage: 201, expected: false },
    { pages: 100, currentPage: NaN, expected: false },
    { pages: 100, currentPage: undefined, expected: true },
  ])(
    "checkShowNextButton($pages, $currentPage)",
    ({ pages, currentPage, expected }) => {
      const output = checkShowNextButton(pages, currentPage);
      expect(output).toBe(expected);
    }
  );
});
