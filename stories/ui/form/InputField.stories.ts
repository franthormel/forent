import type { Meta, StoryObj } from "@storybook/react";
import FieldProps from "@/components/ui/form/Field";
import InputField from "@/components/ui/form/InputField";

const meta: Meta = {
  title: "Components/UI/Form/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Text
 */
const textArgs: FieldProps = {
  label: "Username",
  name: "username",
  type: "text",
};
export const TextInputField: Story = {
  args: textArgs,
};

/**
 * Date
 */
const dateArgs: FieldProps = {
  label: "Date of Appointment",
  name: "appointmentDate",
  type: "date",
};
export const DateInputField: Story = {
  args: dateArgs,
};

/**
 * Number
 */
const numArgs: FieldProps = {
  label: "Quantity",
  name: "quantity",
  type: "number",
};
export const NumberInputField: Story = {
  args: numArgs,
};
