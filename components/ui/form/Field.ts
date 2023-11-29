type InputType = "text" | "date";

export default interface FieldProps {
  /**
   * Input type. Default is 'text'
   */
  type?: InputType;
  /**
   * Input name
   */
  name: string;
  /**
   * Input label
   */
  label: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Is input required. Default is 'false'.
   */
  required?: boolean;
}
