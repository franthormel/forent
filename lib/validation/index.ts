export interface Validator<T> {
  /**
   * Object to be validated
   */
  input: T;
  validate(): unknown;
}
