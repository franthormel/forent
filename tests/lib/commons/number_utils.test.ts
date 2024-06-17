import { NumberUtils } from "../../../lib/commons/number_utils";

describe("Number utils", () => {
  test.each([
    { input: undefined, defaultValue: 0, expected: 0 },
    { input: "", defaultValue: 0, expected: 0 },
    { input: NaN, defaultValue: 0, expected: 0 },
    { input: "abcdefg", defaultValue: 0, expected: 0 },
    { input: 5, defaultValue: 0, expected: 5 },
    { input: "10", defaultValue: 0, expected: 10 },
    { input: "15", defaultValue: 0, expected: 15 },
  ])(
    ".toNumber($input, $defaultValue)",
    ({ input, defaultValue, expected }) => {
      expect(NumberUtils.toNumber(input, defaultValue)).toBe(expected);
    }
  );

  test.each([
    { input: undefined, defaultValue: 0, expected: 0 },
    { input: "", defaultValue: 2, expected: 2 },
    { input: NaN, defaultValue: 62, expected: 62 },
    { input: "abcdefg", defaultValue: 11, expected: 11 },
    { input: 5, defaultValue: 43, expected: 5 },
    { input: "10", defaultValue: 21, expected: 10 },
    { input: -23.1123, defaultValue: 91, expected: -23.1123 },
    { input: "923.21236", defaultValue: 18, expected: 923.21236 },
  ])(
    ".toDecimal($input, $defaultValue)",
    ({ input, defaultValue, expected }) => {
      expect(NumberUtils.toDecimal(input, defaultValue)).toBe(expected);
    }
  );
});
