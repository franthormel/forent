import TextError from "@/components/text-error";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextError> = {
  title: "Text Error",
  component: TextError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: "Something went wrong!",
  },
};
