import { ListingPreviewForm } from "@/lib/types/listing";
import { Validator, ValidatorError } from "..";
import { LISTING_PREVIEW_VALIDATOR } from "./validators";

export class ListingPreviewFormValidator
  implements Validator<ListingPreviewForm>
{
  input: ListingPreviewForm;

  constructor(input: ListingPreviewForm) {
    this.input = input;
  }

  /**
   * Validate the form.
   * Suitable for server actions.
   *
   * @throws `ValidatorError` if any part of the form is invalid
   */
  // FUTURE: Unit test on backend form submission
  validate() {
    return LISTING_PREVIEW_VALIDATOR.safeParse(this.input);
  }
}
