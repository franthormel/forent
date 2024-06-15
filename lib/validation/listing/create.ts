import { ListingCreateForm } from "@/lib/types/listing";
import { Validator, ValidatorError } from "..";
import { LISTING_VALIDATOR } from "./validators";

export class ListingCreateFormValidator
  implements Validator<ListingCreateForm>
{
  // FUTURE: Gradually remove errors
  readonly errorMessages: Map<string, string> = new Map([
    ["longitude", "Map address is required"],
    ["latitude", "Map address is required"],
  ]);

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
  // FUTURE: Unit test on backend form submission
  validate() {
    const result = LISTING_VALIDATOR.safeParse(this.input);

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
