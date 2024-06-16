import { ZodIssue } from "zod";

/**
 * Errors map contains the input fields with a corresponding error message.
 * The input field's `name` attribute in the `key`
 * The input field's error value in the `value`
 */
export interface ListingCreateFormState {
  errors: ZodIssue[];
}
