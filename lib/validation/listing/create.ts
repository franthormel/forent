import { ListingCreateForm } from "@/lib/types/listing";
import { Validator } from "..";
import { LISTING_VALIDATOR } from "./validators";

export class ListingCreateFormValidator
  implements Validator<ListingCreateForm>
{
  input: ListingCreateForm;

  constructor(input: ListingCreateForm) {
    this.input = input;
  }

  /**
   * Validate the form.
   * Suitable for server actions.
   *
   * @throws `ValidatorError` if any part of the form is invalid
   */
  validate() {
    return LISTING_VALIDATOR.safeParse(this.input);
  }
}
