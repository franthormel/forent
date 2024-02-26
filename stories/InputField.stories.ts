import InputField, { InputFieldProps } from "@/components/InputField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/UI/Form/Input Field",
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Text
 */
const textArgs: InputFieldProps = {
  label: "Full Name",
  name: "fullname",
  type: "text",
  placeholder: "Fyodor Mikhailovich Dostoevsky",
  optional: true,
};
export const TextInputField: Story = {
  args: textArgs,
};

/**
 * Date
 */
const dateArgs: InputFieldProps = {
  label: "Date of Appointment",
  name: "appointmentDate",
  type: "date",
};
export const DateInputField: Story = {
  args: dateArgs,
};

const argsWithError: InputFieldProps = {
  ...textArgs,
  errorMessage: "Something went wrong",
};

export const WithError: Story = {
  args: argsWithError,
};
