import { ListingPreviewForm } from "@/lib/types/listing";
import { Validator } from "..";
import { LISTING_VALIDATOR } from "./validators";

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
   */
  validate() {
    return LISTING_VALIDATOR.safeParse(this.input);
  }
}
