import { ListingCreateForm, ListingPreviewForm } from "@/lib/types/listing";
import { Validator, ValidatorError } from "..";
import { LISTING_PREVIEW_VALIDATOR } from "./validators";

// TODO: Rename
export class ListingPreviewFormValidator
  implements Validator<ListingPreviewForm | ListingCreateForm>
{
  input: ListingPreviewForm | ListingCreateForm;

  constructor(input: ListingPreviewForm | ListingCreateForm) {
    this.input = input;
  }

  /**
   * Validate the form.
   * Suitable for server actions.
   */
  validate() {
    return LISTING_PREVIEW_VALIDATOR.safeParse(this.input);
  }
}
