import { NumberUtils } from "./number_utils";

/**
 * Form processing utility
 */
export class FormDataUtils {
  #formData: FormData;

  constructor(formData: FormData) {
    this.#formData = formData;
  }

  /**
   * Get the form number value using the given key
   *
   * @param key Form input name
   * @param defaultValue Default value, this will be returned if the form input does not have a value (or does not exist)
   * @returns the numeric value of the form input field or the default value
   */
  getNumber(key: string, defaultValue: number): number {
    return NumberUtils.toNumber(this.getFormValue(key), defaultValue);
  }

  /**
   * Get the decimal value of the input field
   *
   * @param key Form input name
   * @param defaultValue Default value
   * @returns decimal value of the input field or default value
   */
  getDecimal(key: string, defaultValue: number): number {
    return NumberUtils.toDecimal(this.getFormValue(key), defaultValue);
  }

  /**
   * Get the form string value using the given key
   *
   * @param key Form input name
   * @param defaultValue Default value, this will be returned if the form input does not have a value (or does not exist)
   * @returns the string value of the form input field or the default value
   */
  getString(key: string, defaultValue: string): string {
    const formValue = this.getFormValue(key);
    return formValue ?? defaultValue;
  }

  /**
   * Get the form Date value using the given key
   *
   * @param key Form input name
   * @param defaultValue Default value, this will be returned if the form input does not have a value (or does not exist)
   * @returns the Date value of the form input field or the default value
   */
  getDate(key: string, defaultValue: Date): Date {
    const input = this.getFormValue(key);

    if (typeof input === "string") {
      return new Date(input);
    }

    return defaultValue;
  }

  /**
   * Get the form value using the given key
   *
   * @param key Form input name
   * @returns actual value or undefined if not found
   */
  private getFormValue(key: string): string | undefined {
    return this.#formData.get(key)?.toString().trim();
  }
}
