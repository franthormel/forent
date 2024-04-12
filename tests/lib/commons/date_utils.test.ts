import { DateUtils } from "../../../lib/commons/date_utils";

describe("Date utils", () => {
  describe("date offset", () => {
    const date = new Date(1998, 7, 24);
    test.each([
      { yearOffset: -10, expected: new Date(1988, 7, 24) },
      { yearOffset: -3, expected: new Date(1995, 7, 24) },
      { yearOffset: 0, expected: new Date(1998, 7, 24) },
      { yearOffset: 2, expected: new Date(2000, 7, 24) },
      { yearOffset: 8, expected: new Date(2006, 7, 24) },
    ])("year adjustment ($yearOffset)", ({ yearOffset, expected }) => {
      const actual = DateUtils.offsetYear(date, yearOffset);
      expect(actual.getFullYear()).toBe(expected.getFullYear());
      expect(actual.getMonth()).toBe(expected.getMonth());
      expect(actual.getDate()).toBe(expected.getDate());
    });
  });
});
