type InputType = "text" | "number" | "date";

export default interface FormFieldProps {
  type: InputType;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}
