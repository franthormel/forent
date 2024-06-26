import {
  availableDateText,
  depositText,
} from "../../components/_app/listing/function";

describe("listing page main info", () => {
  test.each([
    { availableDate: null, customToday: undefined, output: "Available Now" },
    {
      availableDate: new Date(2020, 2, 13),
      customToday: undefined,
      output: "Available Now",
    },
    {
      availableDate: new Date(),
      customToday: new Date(),
      output: "Available Now",
    },
    {
      availableDate: new Date(2098, 6, 24),
      customToday: undefined,
      output: "July 24, 2098",
    },
  ])(
    "available date text = $availableDate, $customToday",
    ({ availableDate, output, customToday }) => {
      const actual = availableDateText(availableDate, customToday);
      expect(actual).toBe(output);
    }
  );

  test.each([
    {
      deposit: -92232,
      output: "None",
    },
    {
      deposit: -0.001,
      output: "None",
    },
    {
      deposit: 0,
      output: "None",
    },
    {
      deposit: 998,
      output: "₱998",
    },
    {
      deposit: 76231,
      output: "₱76,231",
    },
  ])("deposit text = $deposit", ({ deposit, output }) => {
    const actual = depositText(deposit);
    expect(actual).toBe(output);
  });
});
