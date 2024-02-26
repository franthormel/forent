import FormInput, { FormInputProps } from "@/components/form-input/FormInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/UI/Form/Input Field",
  component: FormInput,
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Text
 */
const textArgs: FormInputProps = {
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
const dateArgs: FormInputProps = {
  label: "Date of Appointment",
  name: "appointmentDate",
  type: "date",
};
export const DateInputField: Story = {
  args: dateArgs,
};

const argsWithError: FormInputProps = {
  ...textArgs,
  errorMessage: "Something went wrong",
};

export const WithError: Story = {
  args: argsWithError,
};
