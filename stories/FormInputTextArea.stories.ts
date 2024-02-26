import type { Meta, StoryObj } from "@storybook/react";

import FormInputTextArea, {
  FormInputTextAreaProps,
} from "@/components/form-inputs/FormInputTextArea";

const meta: Meta = {
  title: "Form Input Text Area",
  component: FormInputTextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof FormInputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: FormInputTextAreaProps = {
  label: "Description",
  name: "description",
  placeholder: "Please describe your experience...",
};

export const Example: Story = {
  args: args,
};

const argsWithError: FormInputTextAreaProps = {
  ...args,
  errorMessage: "Something went wrong",
};

export const WithError: Story = {
  args: argsWithError,
};
