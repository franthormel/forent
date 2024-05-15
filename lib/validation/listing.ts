import { z } from "zod";
import { CreateListingForm } from "../types/listing";
import { Validator, ValidatorError } from "./index";
import { StringUtils } from "../commons/string_utils";
import { DateUtils } from "../commons/date_utils";

// Price
const PRICE_MIN = Number(process.env.LISTING_PRICE_MIN ?? 100);
const PRICE_MAX = Number(process.env.LISTING_PRICE_MAX ?? 100_000_000);
// FUTURE: Localize currency, put in env
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});
const PRICE_MIN_FORMATTED = CURRENCY_FORMATTER.format(PRICE_MIN);
const PRICE_MAX_FORMATTED = CURRENCY_FORMATTER.format(PRICE_MAX);
const PRICE_VALIDATOR = z
  .number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  })
  .min(PRICE_MIN, {
    message: `Price must be at least ${PRICE_MIN_FORMATTED}`,
  })
  .max(PRICE_MAX, {
    message: `Price cannot exceed ${PRICE_MAX_FORMATTED}`,
  });

// Deposit
const DEPOSIT_MIN = Number(process.env.LISTING_DEPOSIT_MIN ?? 0);
const DEPOSIT_MAX = Number(process.env.LISTING_DEPOSIT_MAX ?? 1_000_000);
const DEPOSIT_MAX_FORMATTED = CURRENCY_FORMATTER.format(DEPOSIT_MAX);
const DEPOSIT_VALIDATOR = z
  .number({
    invalid_type_error: "Deposit must be a number",
  })
  .min(DEPOSIT_MIN, {
    message: "Deposit must be a positive number",
  })
  .max(DEPOSIT_MAX, {
    message: `Deposit cannot exceed ${DEPOSIT_MAX_FORMATTED}`,
  });

// Description
const DESCRIPTION_MIN = Number(process.env.LISTING_DESC_MIN ?? 16);
const DESCRIPTION_MAX = Number(process.env.LISTING_DESC_MAX ?? 1024);
const DESCRIPTION_VALIDATOR = z
  .string({
    errorMap: (issue, ctx) => {
      const input = new String(ctx.data);

      switch (issue.code) {
        case "invalid_type":
          return { message: "Description must be in text format" };
        case "too_small":
          return {
            message: `Description must contain at least ${DESCRIPTION_MIN} characters. Current input contains ${input.length} characters`,
          };
        case "too_big":
          return {
            message: `Description must not exceed ${DESCRIPTION_MAX} characters`,
          };
        default:
          return { message: ctx.defaultError };
      }
    },
  })
  .min(DESCRIPTION_MIN)
  .max(DESCRIPTION_MAX);

// Beds
const BEDS_MIN = Number(process.env.LISTING_BEDS_MIN ?? 1);
const BEDS_MAX = Number(process.env.LISTING_BEDS_MAX ?? 750);
const BEDS_VALIDATOR = z
  .number({
    required_error: "Number of beds is required",
    invalid_type_error: "Number of beds must be a number",
  })
  .min(BEDS_MIN, {
    message: `There must be at least ${BEDS_MIN} bed(s)`,
  })
  .max(BEDS_MAX, {
    message: `Number of beds must not exceed ${BEDS_MAX}`,
  });

// Baths
const BATHS_MIN = Number(process.env.LISTING_BATHS_MIN ?? 1);
const BATHS_MAX = Number(process.env.LISTING_BATHS_MAX ?? 250);
const BATHS_VALIDATOR = z
  .number({
    required_error: "Number of baths is required",
    invalid_type_error: "Number of baths must be a number",
  })
  .min(BATHS_MIN, {
    message: `There must be at least ${BATHS_MIN} bath(s)`,
  })
  .max(BATHS_MAX, {
    message: `Number of beds must not exceed ${BATHS_MAX}`,
  });

// Area
const AREA_MIN = Number(process.env.LISTING_AREA_MIN ?? 10);
const AREA_MAX = Number(process.env.LISTING_AREA_MAX ?? 1_000_000);
const AREA_VALIDATOR = z
  .number({
    required_error: "Area is required",
    invalid_type_error: "Area must be a number",
  })
  .min(AREA_MIN, {
    // FUTURE: Localize `sqm`
    message: `Area must be at least ${AREA_MIN} sqm.`,
  })
  .max(AREA_MAX, {
    // FUTURE: Localize `sqm`
    message: `Area must not exceed ${AREA_MAX} sqm.`,
  });

// Address line
const ADDRESS_LINE_MIN = Number(process.env.LISTING_ADDRESS_LINE_MIN ?? 1);
const ADDRESS_LINE_MAX = Number(process.env.LISTING_ADDRESS_LINE_MAX ?? 128);
const ADDRESS_LINE_VALIDATOR = z
  .string({
    invalid_type_error: "Address line must be in text format",
    required_error: "Address line is required",
  })
  .min(ADDRESS_LINE_MIN, {
    message: `Address line must contain at least ${ADDRESS_LINE_MIN} character(s)`,
  })
  .max(ADDRESS_LINE_MAX, {
    message: `Address line must not exceed ${ADDRESS_LINE_MAX} characters`,
  });

// Address city
const ADDRESS_CITY_MIN = Number(process.env.LISTING_ADDRESS_CITY_MIN ?? 1);
const ADDRESS_CITY_MAX = Number(process.env.LISTING_ADDRESS_CITY_MAX ?? 64);
const ADDRESS_CITY_VALIDATOR = z
  .string({
    invalid_type_error: "City address must be in text format",
    required_error: "City address is required",
  })
  .min(ADDRESS_CITY_MIN, {
    message: `City address must contain at least ${ADDRESS_CITY_MIN} character(s)`,
  })
  .max(ADDRESS_CITY_MAX, {
    message: `City address must not exceed ${ADDRESS_CITY_MAX} characters`,
  });

// Address state
const ADDRESS_STATE_MIN = Number(process.env.LISTING_ADDRESS_STATE_MIN ?? 1);
const ADDRESS_STATE_MAX = Number(process.env.LISTING_ADDRESS_STATE_MAX ?? 64);
const ADDRESS_STATE_VALIDATOR = z
  .string({
    invalid_type_error: "State address must be in text format",
    required_error: "State address is required",
  })
  .min(ADDRESS_STATE_MIN, {
    message: `State address must contain at least ${ADDRESS_STATE_MIN} character(s)`,
  })
  .max(ADDRESS_STATE_MAX, {
    message: `State address must not exceed ${ADDRESS_STATE_MAX} characters`,
  });

// Address zip
const ADDRESS_ZIP_MIN = Number(process.env.LISTING_ADDRESS_ZIP_MIN ?? 1);
const ADDRESS_ZIP_MAX = Number(process.env.LISTING_ADDRESS_ZIP_MAX ?? 64);
const ADDRESS_ZIP_VALIDATOR = z
  .string({
    invalid_type_error: "ZIP code address must be in text format",
    required_error: "ZIP code address is required",
  })
  .min(ADDRESS_ZIP_MIN, {
    message: `ZIP code address must contain at least ${ADDRESS_ZIP_MIN} character(s)`,
  })
  .max(ADDRESS_ZIP_MAX, {
    message: `ZIP code address must not exceed ${ADDRESS_ZIP_MAX} characters`,
  });

export class CreateListingFormValidator
  implements Validator<CreateListingForm>
{
  // TODO: Gradually remove errors
  readonly errorMessages: Map<string, string> = new Map([
    ["availableDate", "Available Date is required and must be valid"],
    ["longitude", "Map address is required"],
    ["latitude", "Map address is required"],
  ]);

  input: CreateListingForm;

  constructor(input: CreateListingForm) {
    this.input = input;
  }

  /**
   * Validate price
   *
   * @param price Listing price
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validatePrice(price: number) {
    return PRICE_VALIDATOR.safeParse(price);
  }

  /**
   * Validate deposit
   *
   * @param deposit Listing deposit
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateDeposit(deposit: number) {
    return DEPOSIT_VALIDATOR.safeParse(deposit);
  }

  /**
   * Validate description
   *
   * @param description Listing description
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateDescription(description: string) {
    return DESCRIPTION_VALIDATOR.safeParse(description);
  }

  /**
   * Validate number of beds
   *
   * @param description Listing beds
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateBeds(beds: number) {
    return BEDS_VALIDATOR.safeParse(beds);
  }

  /**
   * Validate number of baths
   *
   * @param description Listing baths
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateBaths(baths: number) {
    return BATHS_VALIDATOR.safeParse(baths);
  }

  /**
   * Validate area
   *
   * @param description Listing area
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
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
  // TODO: Unit test
  static validateAvailableDate(
    date: string,
    today: Date,
    oneYearFromToday?: Date
  ) {
    let max = oneYearFromToday ?? DateUtils.offsetYear(today, 1);
    const validator = z.coerce
      .date({
        invalid_type_error: "Available date must be in the correct date format",
      })
      .min(today, {
        message: "Available date must only be set on a future date.",
      })
      .max(max, {
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
  // TODO: Unit test
  static validateAddressLine(addressLine: string) {
    return ADDRESS_LINE_VALIDATOR.safeParse(addressLine);
  }

  /**
   * Validate city address
   *
   * @param city Listing city address
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateAddressCity(city: string) {
    return ADDRESS_CITY_VALIDATOR.safeParse(city);
  }

  /**
   * Validate state address
   *
   * @param state Listing state address
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateAddressState(state: string) {
    return ADDRESS_STATE_VALIDATOR.safeParse(state);
  }

  /**
   * Validate zip code address
   *
   * @param zipCode Listing zip code address
   * @returns Validation result (either success or error message)
   */
  // TODO: Unit test
  static validateAddressZip(zipCode: string) {
    return ADDRESS_ZIP_VALIDATOR.safeParse(zipCode);
  }

  /**
   * Validate the form.
   * Suitable for server actions.
   *
   * @throws `ValidatorError` if any part of the form is invalid
   */
  validate() {
    const validator = z.object({
      price: PRICE_VALIDATOR,
      deposit: DEPOSIT_VALIDATOR,
      description: DESCRIPTION_VALIDATOR,
      beds: BEDS_VALIDATOR,
      baths: BATHS_VALIDATOR,
      area: AREA_VALIDATOR,
      availableDate: z.date(),
      longitude: z
        .number()
        .min(Number(process.env.LISTING_ADDRESS_LON_MIN ?? -180))
        .max(Number(process.env.LISTING_ADDRESS_LON_MAX ?? 180)),
      latitude: z
        .number()
        .min(Number(process.env.LISTING_ADDRESS_LAT_MIN ?? -90))
        .max(Number(process.env.LISTING_ADDRESS_LAT_MAX ?? 90)),
    });

    const result = validator.safeParse(this.input);

    if (!result.success) {
      const errors = result.error.errors;

      // TODO: Return all error messages in a map (key = field name, value = 1st error message)
      for (const error of errors) {
        const errorKey = error.path.at(0)?.toString();

        if (errorKey === undefined) {
          continue;
        }

        const errorMessage = this.errorMessages.get(errorKey);

        if (errorMessage === undefined) {
          continue;
        }

        throw new ValidatorError(errorMessage);
      }
    }
  }
}
