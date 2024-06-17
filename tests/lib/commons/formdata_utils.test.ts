import { FormDataUtils } from "../../../lib/commons/formdata_utils";

describe("Form data utils", () => {
  const form = new FormData();
  form.set("num", "101");
  form.set("text", "abc");
  form.set("date", "2020-01-01T00:00:00.000Z");
  form.set("decimal", "-25.00071");

  const sut = new FormDataUtils(form);

  test.each([
    { key: "num", defaultValue: 0, expected: 101 },
    { key: "", defaultValue: 0, expected: 0 },
    { key: "text", defaultValue: 0, expected: 0 },
    { key: "none", defaultValue: 0, expected: 0 },
  ])("getNumber($key, $defaultValue)", ({ key, defaultValue, expected }) => {
    const actual = sut.getNumber(key, defaultValue);
    expect(actual).toBe(expected);
  });

  test.each([
    { key: "num", defaultValue: 1, expected: 101 },
    { key: "", defaultValue: 22, expected: 22 },
    { key: "text", defaultValue: 53, expected: 53 },
    { key: "none", defaultValue: 14, expected: 14 },
    { key: "decimal", defaultValue: 0, expected: -25.00071 },
  ])("getDecimal($key, $defaultValue)", ({ key, defaultValue, expected }) => {
    const actual = sut.getDecimal(key, defaultValue);
    expect(actual).toBe(expected);
  });

  test.each([
    { key: "num", defaultValue: "str", expected: "101" },
    { key: "text", defaultValue: "str", expected: "abc" },
    { key: "", defaultValue: "str", expected: "str" },
    { key: "none", defaultValue: "str", expected: "str" },
  ])("getString($key, $defaultValue)", ({ key, defaultValue, expected }) => {
    const actual = sut.getString(key, defaultValue);
    expect(actual).toBe(expected);
  });

  test.each([
    {
      key: "date",
      defaultValue: new Date("1998-01-01T00:00:00.000Z"),
      expected: new Date("2020-01-01T00:00:00.000Z"),
    },
    {
      key: "none",
      defaultValue: new Date("1998-01-01T00:00:00.000Z"),
      expected: new Date("1998-01-01T00:00:00.000Z"),
    },
    {
      key: "",
      defaultValue: new Date("1998-01-01T00:00:00.000Z"),
      expected: new Date("1998-01-01T00:00:00.000Z"),
    },
  ])("getDate($key, $defaultValue)", ({ key, defaultValue, expected }) => {
    const actual = sut.getDate(key, defaultValue);
    expect(actual).toStrictEqual(expected);
  });
});
