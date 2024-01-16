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
    price: z.number().min(100).max(100_000_000),
    description: z.string().min(16).max(1024),
    deposit: z.number().min(0).max(1_000_000),
    availableDate: z.date(), // todo: min and max dates
    beds: z.number().min(1).max(750),
    baths: z.number().min(1).max(250),
    longitude: z.string().min(1),
    latitude: z.string().min(1),
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
