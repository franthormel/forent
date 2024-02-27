import FormInputTextArea from "@/components/form-inputs/FormInputTextArea";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormInputTextArea> = {
  title: "Form Input Text Area",
  component: FormInputTextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof FormInputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Description",
    name: "description",
    placeholder: "Please describe your experience...",
  },
};

export const Error: Story = {
  args: {
    label: "Description",
    name: "description",
    placeholder: "Please describe your experience...",
    errorMessage: "Something went wrong",
  },
};
