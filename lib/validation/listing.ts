import { z } from "zod";
import { fetchDateOneYearFromToday, fetchToday } from "../date";
import { FormListing } from "../types/listing";
import { Validator, ValidatorError } from "./index";

export class FormListingValidator implements Validator<FormListing> {
  readonly errorMessages: Map<string, string> = new Map([
    ["price", "Price is required and must be valid"],
    ["description", "Description is required and must be valid"],
    ["deposit", "Deposit is required and must be valid"],
    ["availableDate", "Available Date is required and must be valid"],
    ["beds", "No. of Beds is required and must be valid"],
    ["baths", "No. of Baths is required and must be valid"],
    ["longitude", "Map address is required"],
    ["latitude", "Map address is required"],
  ]);

  readonly #validator = z.object({
    price: z
      .number()
      .min(Number(process.env.LISTING_PRICE_MIN ?? 100))
      .max(Number(process.env.LISTING_PRICE_MAX ?? 100_000_000)),
    description: z
      .string()
      .min(Number(process.env.LISTING_DESC_MIN ?? 16))
      .max(Number(process.env.LISTING_DESC_MAX ?? 1024)),
    deposit: z
      .number()
      .min(Number(process.env.LISTING_DEPOSIT_MIN ?? 0))
      .max(Number(process.env.LISTING_DEPOSIT_MAX ?? 1_000_000)),
    availableDate: z.date(), // FUTURE: min and max dates
    beds: z
      .number()
      .min(Number(process.env.LISTING_BEDS_MIN ?? 1))
      .max(Number(process.env.LISTING_BEDS_MAX ?? 750)),
    baths: z
      .number()
      .min(Number(process.env.LISTING_BATHS_MIN ?? 1))
      .max(Number(process.env.LISTING_BATHS_MAX ?? 250)),
    longitude: z
      .number()
      .min(Number(process.env.LISTING_LONGT_MIN ?? -180))
      .max(Number(process.env.LISTING_LONGT_MAX ?? 180)),
    latitude: z
      .number()
      .min(Number(process.env.LISTING_LATT_MIN ?? -90))
      .max(Number(process.env.LISTING_LATT_MAX ?? 90)),
  });

  input: FormListing;

  constructor(input: FormListing) {
    this.input = input;
  }

  validate() {
    const result = this.#validator.safeParse(this.input);

    if (!result.success) {
      const errors = result.error.errors;

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
