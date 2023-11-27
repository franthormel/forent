type InputType = "text" | "number" | "date";

export default interface FieldProps {
  type: InputType;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}
