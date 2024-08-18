import { z } from "zod";
import { CURRENCY_FORMATTER } from "../../formatter/currency";
import { NUMBER_FORMATTER } from "../../formatter/number";

// Price
const PRICE_MIN = Number(process.env.LISTING_PRICE_MIN ?? 100);
const PRICE_MAX = Number(process.env.LISTING_PRICE_MAX ?? 100_000_000);

const PRICE_MIN_FORMATTED = CURRENCY_FORMATTER.format(PRICE_MIN);
const PRICE_MAX_FORMATTED = CURRENCY_FORMATTER.format(PRICE_MAX);
export const PRICE_VALIDATOR = z
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

export function customizePriceValidator(min: number, max: number): z.ZodNumber {
  const minimumPriceMessage = CURRENCY_FORMATTER.format(min);
  const maximumPriceMessage = CURRENCY_FORMATTER.format(max);
  return z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .min(min, {
      message: `Price must be at least ${minimumPriceMessage}`,
    })
    .max(max, {
      message: `Price cannot exceed ${maximumPriceMessage}`,
    });
}

// Deposit
const DEPOSIT_MIN = Number(process.env.LISTING_DEPOSIT_MIN ?? 0);
const DEPOSIT_MAX = Number(process.env.LISTING_DEPOSIT_MAX ?? 1_000_000);
const DEPOSIT_MAX_FORMATTED = CURRENCY_FORMATTER.format(DEPOSIT_MAX);
export const DEPOSIT_VALIDATOR = z
  .number({
    required_error: "Deposit is required",
    invalid_type_error: "Deposit must be a number",
  })
  .min(DEPOSIT_MIN, {
    message: "Deposit must be a positive number",
  })
  .max(DEPOSIT_MAX, {
    message: `Deposit cannot exceed ${DEPOSIT_MAX_FORMATTED}`,
  })
  .optional();

// Description
const DESCRIPTION_MIN = Number(process.env.LISTING_DESC_MIN ?? 16);
const DESCRIPTION_MAX = Number(process.env.LISTING_DESC_MAX ?? 1024);
export const DESCRIPTION_VALIDATOR = z
  .string({
    errorMap: (issue, ctx) => {
      const input = new String(ctx.data);
      let message = ctx.defaultError;

      switch (issue.code) {
        case "invalid_type":
          message = "Description text is required and must be a valid format";
          break;
        case "too_small":
          message = `Description must contain at least ${DESCRIPTION_MIN} characters. Current input contains ${input.length} characters`;
          break;
        case "too_big":
          message = `Description must not exceed ${DESCRIPTION_MAX} characters`;
          break;
      }

      return {
        message: message,
      };
    },
  })
  .min(DESCRIPTION_MIN)
  .max(DESCRIPTION_MAX);

// Beds
const BEDS_MIN = Number(process.env.LISTING_BEDS_MIN ?? 1);
const BEDS_MAX = Number(process.env.LISTING_BEDS_MAX ?? 750);
export const BEDS_VALIDATOR = z
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
export const BATHS_VALIDATOR = z
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
export const AREA_VALIDATOR = z
  .number({
    required_error: "Area is required",
    invalid_type_error: "Area must be a number",
  })
  .min(AREA_MIN, {
    // FUTURE: Localize `sqm`
    message: `Area must be at least ${NUMBER_FORMATTER.format(AREA_MIN)} sqm.`,
  })
  .max(AREA_MAX, {
    // FUTURE: Localize `sqm`
    message: `Area must not exceed ${NUMBER_FORMATTER.format(AREA_MAX)} sqm.`,
  });

export function customizeAreaValidator(min: number, max: number): z.ZodNumber {
  return z
    .number({
      required_error: "Area is required",
      invalid_type_error: "Area must be a number",
    })
    .min(min, {
      // FUTURE: Localize `sqm`
      message: `Area must be at least ${NUMBER_FORMATTER.format(min)} sqm.`,
    })
    .max(max, {
      // FUTURE: Localize `sqm`
      message: `Area must not exceed ${NUMBER_FORMATTER.format(max)} sqm.`,
    });
}

// Available Date
// NOTE: Append min-max date values using this validator if needed
export const AVAILABLE_DATE_VALIDATOR = z.coerce.date({
  invalid_type_error: "Available date must be in the correct date format",
});
const AVAILABLE_DATE_VALIDATOR_OPTIONAL = AVAILABLE_DATE_VALIDATOR.optional();

// Address map
const ADDRESS_MAP_ERROR = "Map location is required. Click on the map above.";
// Address longitude
export const ADDRESS_LONGITUDE_VALIDATOR = z
  .number({
    required_error: ADDRESS_MAP_ERROR,
    invalid_type_error: ADDRESS_MAP_ERROR,
  })
  .min(Number(process.env.LISTING_ADDRESS_LON_MIN ?? -180))
  .max(Number(process.env.LISTING_ADDRESS_LON_MAX ?? 180));
// Address latitude
export const ADDRESS_LATITUDE_VALIDATOR = z
  .number({
    required_error: ADDRESS_MAP_ERROR,
    invalid_type_error: ADDRESS_MAP_ERROR,
  })
  .min(Number(process.env.LISTING_ADDRESS_LAT_MIN ?? -90))
  .max(Number(process.env.LISTING_ADDRESS_LAT_MAX ?? 90));

// Address line
const ADDRESS_LINE_MIN = Number(process.env.LISTING_ADDRESS_LINE_MIN ?? 1);
const ADDRESS_LINE_MAX = Number(process.env.LISTING_ADDRESS_LINE_MAX ?? 128);
export const ADDRESS_LINE_VALIDATOR = z
  .string({
    required_error: "Address line is required",
    invalid_type_error: "Address line must be in text format",
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
export const ADDRESS_CITY_VALIDATOR = z
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
export const ADDRESS_STATE_VALIDATOR = z
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
const ADDRESS_ZIP_MIN = Number(process.env.LISTING_ADDRESS_ZIP_MIN ?? 0);
const ADDRESS_ZIP_MAX = Number(process.env.LISTING_ADDRESS_ZIP_MAX ?? 64);
export const ADDRESS_ZIP_VALIDATOR = z
  .string({
    invalid_type_error: "ZIP code address must be in text format",
  })
  .min(ADDRESS_ZIP_MIN, {
    message: `ZIP code address must contain at least ${ADDRESS_ZIP_MIN} character(s)`,
  })
  .max(ADDRESS_ZIP_MAX, {
    message: `ZIP code address must not exceed ${ADDRESS_ZIP_MAX} characters`,
  })
  .optional();

export const LISTING_VALIDATOR = z.object({
  price: PRICE_VALIDATOR,
  deposit: DEPOSIT_VALIDATOR,
  description: DESCRIPTION_VALIDATOR,
  beds: BEDS_VALIDATOR,
  baths: BATHS_VALIDATOR,
  area: AREA_VALIDATOR,
  availableDate: AVAILABLE_DATE_VALIDATOR_OPTIONAL,
  addressLongitude: ADDRESS_LONGITUDE_VALIDATOR,
  addressLatitude: ADDRESS_LATITUDE_VALIDATOR,
  addressLine: ADDRESS_LINE_VALIDATOR,
  addressCity: ADDRESS_CITY_VALIDATOR,
  addressState: ADDRESS_STATE_VALIDATOR,
  addressZipcode: ADDRESS_ZIP_VALIDATOR,
});
