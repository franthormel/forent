import { DateUtils } from "../../commons/date_utils";
import {
  ADDRESS_CITY_VALIDATOR,
  ADDRESS_LINE_VALIDATOR,
  ADDRESS_STATE_VALIDATOR,
  ADDRESS_ZIP_VALIDATOR,
  AREA_VALIDATOR,
  AVAILABLE_DATE_VALIDATOR,
  BATHS_VALIDATOR,
  BEDS_VALIDATOR,
  DEPOSIT_VALIDATOR,
  DESCRIPTION_VALIDATOR,
  PRICE_VALIDATOR,
} from "./validators";

/**
 * Suitable for validating individual listing attributes
 */
export class ListingFormValidator {
  /**
   * Validate price
   *
   * @param price Listing price
   * @returns Validation result (either success or error message)
   */
  static validatePrice(price: number) {
    return PRICE_VALIDATOR.safeParse(price);
  }

  /**
   * Validate deposit
   *
   * @param deposit Listing deposit
   * @returns Validation result (either success or error message)
   */
  static validateDeposit(deposit: number) {
    return DEPOSIT_VALIDATOR.safeParse(deposit);
  }

  /**
   * Validate description
   *
   * @param description Listing description
   * @returns Validation result (either success or error message)
   */
  static validateDescription(description: string) {
    return DESCRIPTION_VALIDATOR.safeParse(description);
  }

  /**
   * Validate number of beds
   *
   * @param description Listing beds
   * @returns Validation result (either success or error message)
   */
  static validateBeds(beds: number) {
    return BEDS_VALIDATOR.safeParse(beds);
  }

  /**
   * Validate number of baths
   *
   * @param description Listing baths
   * @returns Validation result (either success or error message)
   */
  static validateBaths(baths: number) {
    return BATHS_VALIDATOR.safeParse(baths);
  }

  /**
   * Validate area
   *
   * @param description Listing area
   * @returns Validation result (either success or error message)
   */
  static validateArea(area: number) {
    return AREA_VALIDATOR.safeParse(area);
  }

  /**
   * Validate available date.
   * Suitable for client-side validation.
   *
   * @param description Listing available date
   * @param today Today's date (client-side). Unsafe to be provided by the server since client & server timezones might be different
   * @param oneYearFromToday? Maximum date (client-side). Will be derived by offsetting today's date by one (1) year if this param is not provided.
   * @returns Validation result (either success or error message)
   */
  static validateAvailableDate(
    date: string,
    today: Date,
    oneYearFromToday?: Date
  ) {
    // Set to the start of the day so that user can choose this date otherwise validation will throw an error
    today.setHours(0, 0, 0, 0);
    const max = oneYearFromToday ?? DateUtils.offsetYear(today, 1);
    // Set to the end of the day (just before midnight strikes) so that user can choose this date otherwise validation will throw an error
    max.setHours(23, 59, 59, 999);

    const validator = AVAILABLE_DATE_VALIDATOR.min(today, {
      message: "Available date must only be set on a future date.",
    }).max(max, {
      message: "Available date cannot exceed one (1) year from today",
    });

    return validator.safeParse(date);
  }

  /**
   * Validate address line
   *
   * @param addressLine Listing address line
   * @returns Validation result (either success or error message)
   */
  static validateAddressLine(addressLine: string) {
    return ADDRESS_LINE_VALIDATOR.safeParse(addressLine);
  }

  /**
   * Validate city address
   *
   * @param city Listing city address
   * @returns Validation result (either success or error message)
   */
  static validateAddressCity(city: string) {
    return ADDRESS_CITY_VALIDATOR.safeParse(city);
  }

  /**
   * Validate state address
   *
   * @param state Listing state address
   * @returns Validation result (either success or error message)
   */
  static validateAddressState(state: string) {
    return ADDRESS_STATE_VALIDATOR.safeParse(state);
  }

  /**
   * Validate zip code address
   *
   * @param zipCode Listing zip code address
   * @returns Validation result (either success or error message)
   */
  static validateAddressZip(zipCode: string) {
    return ADDRESS_ZIP_VALIDATOR.safeParse(zipCode);
  }
}
