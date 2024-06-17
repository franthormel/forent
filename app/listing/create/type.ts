import { ZodIssue } from "zod";

/**
 * Errors map contains the input fields with a corresponding error message.
 * The input field's `name` attribute in the `key`
 * The input field's error value in the `value`
 */
export interface ListingCreateFormState {
  success: boolean;
  errors: {
    price?: string;
    deposit?: string;
    description?: string;
    imageUrls?: string;
    beds?: string;
    baths?: string;
    area?: string;
    availableDate?: string;
    /**
     * For general map-related errors. Example: invalid coordinates
     */
    addressMap?: string;
    addressLine?: string;
    addressCity?: string;
    addressState?: string;
    addressZipcode?: string;
  };
}
