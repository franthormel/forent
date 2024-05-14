import { z } from "zod";
import { CreateListingForm } from "../types/listing";
import { Validator, ValidatorError } from "./index";
import { StringUtils } from "../commons/string_utils";

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
  static validateBaths(baths: number | string) {
    return BATHS_VALIDATOR.safeParse(baths);
  }

  /**
   * Validate the form
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
      availableDate: z.date(),
      longitude: z
        .number()
        .min(Number(process.env.LISTING_LONGT_MIN ?? -180))
        .max(Number(process.env.LISTING_LONGT_MAX ?? 180)),
      latitude: z
        .number()
        .min(Number(process.env.LISTING_LATT_MIN ?? -90))
        .max(Number(process.env.LISTING_LATT_MAX ?? 90)),
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
