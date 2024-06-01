/**
 * Validator
 */
export interface Validator<T> {

  /**
   * Object to be validated
   */
  input: T;

  /**
   * Validate the object
   */
  validate(): unknown;
}

/**
 * Validator error
 */
export class ValidatorError<T> extends Error {
  /**
   * Errors of all the invalid inputs.
   */
  readonly error: string;

  constructor(error: string) {
    super();
    this.error = error;
  }

  /**
   *  Get the primary error message
   *
   * @returns primary error message
   */
  getErrorMessage(): string | undefined {
    if (this.error.length > 0) {
      return this.error;
    }
  }
}
