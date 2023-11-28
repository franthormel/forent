type InputType = "text" | "number" | "date";

export default interface FieldProps {
  /**
   * Input type
   */
  type: InputType;
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
   * Is input required
   */
  required?: boolean;
}
