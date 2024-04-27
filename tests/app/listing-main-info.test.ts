import { availableDateText } from "../../app/listing/_component/function";

describe("listing page main info", () => {
  test.each([
    { availableDate: null, output: "Available Now" },
    { availableDate: new Date(2020, 2, 13), output: "Available Now" },
    { availableDate: new Date(), output: "Available Now" },
    { availableDate: new Date(2098, 6, 24), output: "July 24, 2098" },
  ] as Array<{
    availableDate: Date | null;
    output: string;
  }>)("available date text = $availableDate", ({ availableDate, output }) => {
    const actual = availableDateText(availableDate);
    expect(actual).toBe(output);
  });
});
