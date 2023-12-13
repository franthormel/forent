import { NumberUtils } from "../lib/commons";

describe("NumberUtils", () => {
  test.each([
    { input: undefined, defaultValue: 0, expected: 0 },
    { input: "", defaultValue: 0, expected: 0 },
    { input: NaN, defaultValue: 0, expected: 0 },
    { input: 5, defaultValue: 0, expected: 5 },
    { input: "10", defaultValue: 0, expected: 10 },
    { input: "15", defaultValue: 0, expected: 15 },
  ])(
    ".toNumber($input, $defaultValue)",
    ({ input, defaultValue, expected }) => {
      process.env.ENVIRONMENT = "development";
      expect(NumberUtils.toNumber(input, defaultValue)).toBe(expected);
    }
  );
});
