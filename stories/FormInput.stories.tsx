import FormInput from "@/components/form-input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormInput> = {
  title: "Form Input",
  component: FormInput,
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Text
 */
export const Text: Story = {
  args: {
    label: "Full Name",
    name: "fullname",
    type: "text",
    placeholder: "Fyodor Mikhailovich Dostoevsky",
    optional: true,
  },
};

/**
 * Date
 */
export const Date: Story = {
  args: {
    label: "Date of Appointment",
    name: "appointmentDate",
    type: "date",
  },
};

/**
 * Error
 */
export const Error: Story = {
  args: {
    label: "Full Name",
    name: "fullname",
    type: "text",
    placeholder: "Fyodor Dostoevsky",
    optional: false,
    errorMessage: "Something went wrong",
  },
};
