import { FormDataUtils, NumberUtils } from "../lib/commons";

describe("commons", () => {
  describe("NumberUtils", () => {
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
  });

  describe("FormDataUtils", () => {
    const form = new FormData();
    form.set("num", "101");
    form.set("text", "abc");

    const sut = new FormDataUtils(form);

    test.each([
      { key: "num", defaultValue: 0, expected: 101 },
      { key: "", defaultValue: 0, expected: 0 },
      { key: "text", defaultValue: 0, expected: 0 },
      { key: "none", defaultValue: 0, expected: 0 },
    ])("getNumber($key, $defaultValue)", ({ key, defaultValue, expected }) => {
      expect(sut.getNumber(key, defaultValue)).toBe(expected);
    });

    test.each([
      { key: "num", defaultValue: "str", expected: "101" },
      { key: "text", defaultValue: "str", expected: "abc" },
      { key: "", defaultValue: "str", expected: "str" },
      { key: "none", defaultValue: "str", expected: "str" },
    ])("getString($key, $defaultValue)", ({ key, defaultValue, expected }) => {
      expect(sut.getString(key, defaultValue)).toBe(expected);
    });
  });
});
