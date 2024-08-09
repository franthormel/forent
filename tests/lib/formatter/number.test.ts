import { formatAppend } from "../../../lib/formatter/number";

describe("Number formatter", () => {
  test.each([
    { value: 15, append: "apples", expected: "15 apples" },
    { value: 1_302, append: "MB", expected: "1,302 MB" },
    { value: 1_250_390, append: "units", expected: "1,250,390 units" },
  ])("formatAppend($value, $append)", ({ value, append, expected }) => {
    const output = formatAppend(value, append);
    expect(output).toBe(expected);
  });
});
