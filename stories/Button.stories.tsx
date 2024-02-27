import Button from "@/components/buttons/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    color: "tertiary",
  },
};
