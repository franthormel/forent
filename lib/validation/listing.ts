import { z } from "zod";
import { fetchDateOneYearFromToday, fetchDateToday } from "../date";
import { FormListing } from "../types/listing";
import { Validator, ValidatorError } from "./index";
import { error } from "console";

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
    availableDate: z
      .date()
      .min(fetchDateToday())
      .max(fetchDateOneYearFromToday()),
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
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  }
}

/**
 * Form listing error
 */
export class FormListingError extends ValidatorError<FormListing> {
  constructor(errors: string[]) {
    super(errors);
  }

  /**
   *  Get the primary error message
   *
   * @returns primary error message
   */
  getErrorMessage(): string | undefined {
    if (this.errors.length > 0) {
      return this.errors[0];
    }
  }

  static empty(): FormListingError {
    return new FormListingError([]);
  }
}
