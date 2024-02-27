import Button, { ButtonProps } from "@/components/buttons/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ButtonProps = {
  text: "Button",
  onClick: () => console.log("Clicked 🐭!"),
  color: "primary",
};

export const Primary: Story = {
  args: args,
};
export const Secondary: Story = {
  args: {
    ...args,
    color: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    ...args,
    color: "tertiary",
  },
};
