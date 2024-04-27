import { DateUtils } from "../../../lib/commons/date_utils";

describe("Date utils", () => {
  test.each([
    { yearOffset: -10, expected: new Date(1988, 7, 24) },
    { yearOffset: -3, expected: new Date(1995, 7, 24) },
    { yearOffset: 0, expected: new Date(1998, 7, 24) },
    { yearOffset: 2, expected: new Date(2000, 7, 24) },
    { yearOffset: 8, expected: new Date(2006, 7, 24) },
  ])("offset year = $yearOffset", ({ yearOffset, expected }) => {
    const date = new Date(1998, 7, 24);
    const actual = DateUtils.offsetYear(date, yearOffset);
    expect(actual.getFullYear()).toBe(expected.getFullYear());
    expect(actual.getMonth()).toBe(expected.getMonth());
    expect(actual.getDate()).toBe(expected.getDate());
  });

  test.each([
    {
      date: new Date(2020, 2, 13),
      custom: new Date(2030, 2, 13),
      output: true,
    },
    { date: new Date(2055, 2, 13), custom: undefined, output: false },
  ])("date has passed = $date, $custom", ({ date, custom, output }) => {
    const actual = DateUtils.dateHasPassed(date, custom);
    expect(actual).toBe(output);
  });

  test.each([
    { date: new Date(), today: undefined, output: true },
    { date: new Date(), today: new Date(1998, 1, 1), output: false },
    { date: new Date(2000, 1, 1), today: new Date(2000, 1, 1), output: true },
  ])("date is today = $date, $today", ({ date, today, output }) => {
    const actual = DateUtils.dateIsToday(date, today);
    expect(actual).toBe(output);
  });
});
