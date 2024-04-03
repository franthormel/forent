import { StringUtils } from "../../../lib/commons/string_utils";

describe("String utils", () => {
  test.each([
    { input: "string", expected: true },
    { input: "a", expected: true },
    { input: undefined, expected: false },
    { input: "", expected: false },
    { input: "", expected: false },
  ])("checkInput($input, $expected)", ({ input, expected }) => {
    const actual = StringUtils.checkInput(input);
    expect(actual).toBe(expected);
  });
});
