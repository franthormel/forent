import TextError, { TextErrorProps } from "@/components/text-error/TextError";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Text Error",
  component: TextError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextError>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: TextErrorProps = {
  value: "Something went wrong!",
};

export const Example: Story = {
  args: args,
};
