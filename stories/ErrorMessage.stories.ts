import type { Meta, StoryObj } from "@storybook/react";
import TextError, { TextErrorProps } from "@/components/text-error/TextError";

const meta: Meta = {
  title: "Components/Error Message",
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
