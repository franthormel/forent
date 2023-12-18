import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage, { ErrorMessageProps } from "@/components/ui/ErrorMessage";

const meta: Meta = {
  title: "Components/Error Message",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ErrorMessageProps = {
  value: "Something went wrong!",
};

export const Example: Story = {
  args: args,
};
