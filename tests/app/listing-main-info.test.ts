import { availableDateText } from "../../app/listing/[id]/_component/function";

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
});
