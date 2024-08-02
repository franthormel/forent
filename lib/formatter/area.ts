import { NUMBER_FORMATTER } from "./number";

// FUTURE: Localize and put in env
// TODO: Unit test
export class AREA_FORMATTER {
  static format(value: number) {
    const formatted = NUMBER_FORMATTER.format(value);
    // FUTURE: This is temporary until the actual `area-square-meter` is supported.
    // Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_2
    return `${formatted} sqm.`;
  }
}
