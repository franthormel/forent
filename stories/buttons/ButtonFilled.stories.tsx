import ButtonFilled from "@/components/buttons/filled";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonFilled> = {
  title: "Buttons/Filled",
  component: ButtonFilled,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "Base"
  }
};

export const Small: Story = {
  args: {
    text: "Small",
    size: "small"
  }
};
