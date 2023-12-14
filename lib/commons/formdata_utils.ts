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
    const input = this.getFormValue(key);
    return NumberUtils.toNumber(this.getFormValue(key), defaultValue);
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
   * Get the form value using the given key
   *
   * @param key Form input name
   * @returns actual value or undefined if not found
   */
  private getFormValue(key: string): string | undefined {
    return this.#formData.get(key)?.toString().trim();
  }
}
