import { StringUtils } from "../../../lib/commons/string_utils";

describe("String utils", () => {
  test.each([
    { input: "string", expected: true },
    { input: "a", expected: true },
    { input: undefined, expected: false },
    { input: "", expected: false },
    { input: "", expected: false },
  ])("checkInput = $input", ({ input, expected }) => {
    const actual = StringUtils.checkInput(input);
    expect(actual).toBe(expected);
  });

  test.each([
    { count: 1, base: "dog", expected: "1 dog" },
    { count: 2, base: "paper", expected: "2 papers" },
    { count: 3, base: "towel", expected: "3 towels" },
  ])("pluralize = $count, $base", ({ count, base, expected }) => {
    const actual = StringUtils.pluralizeTextCount(count, base);
    expect(actual).toBe(expected);
  });
});
