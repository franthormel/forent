/**
 * Validator
 */
export interface Validator<T> {
  /**
   * Error messages of all possible scenarios.
   */
  readonly errorMessages: Map<string, string>;

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
  readonly errors: Map<string, string>;

  constructor(errors: Map<string, string>) {
    super();
    this.errors = errors;
  }
}
