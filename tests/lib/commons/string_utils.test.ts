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
    { count: 1, text: "dog", expected: "1 dog" },
    { count: 2, text: "paper", expected: "2 papers" },
    { count: 3, text: "towel", expected: "3 towels" },
  ])("pluralize text count = $count, $text", ({ count, text, expected }) => {
    const actual = StringUtils.pluralizeTextCount(count, text);
    expect(actual).toBe(expected);
  });

  test.each([
    { count: 1, text: "apple", expected: "apple" },
    { count: 2, text: "window", expected: "windows" },
    { count: 3, text: "screen", expected: "screens" },
  ])("pluralize text = $count, $text", ({ count, text, expected }) => {
    const actual = StringUtils.pluralizeText(count, text);
    expect(actual).toBe(expected);
  });
});
