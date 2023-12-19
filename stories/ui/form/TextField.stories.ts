import type { Meta, StoryObj } from "@storybook/react";

import TextField, { TextFieldProps } from "@/components/ui/form/TextField";

const meta: Meta = {
  title: "Components/UI/Form/Text Field",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: TextFieldProps = {
  label: "Description",
  name: "description",
  placeholder: "Please describe your experience...",
};

export const Example: Story = {
  args: args,
};

const argsWithError: TextFieldProps = {
  ...args,
  errorMessage: "Something went wrong",
};

export const WithError: Story = {
  args: argsWithError,
};
