import { CURRENCY_FORMATTER } from "../../../lib/formatter/currency";

describe("Currency formatter", () => {
  test.each([
    { value: 12.39, expected: "₱12" },
    { value: 2_592.912, expected: "₱2,593" },
    { value: 42_622_884.2837, expected: "₱42,622,884" },
  ])("format($value)", ({ value, expected }) => {
    const output = CURRENCY_FORMATTER.format(value);
    expect(output).toBe(expected);
  });
});
