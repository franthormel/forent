import type { Meta, StoryObj, ArgTypes } from "@storybook/react";
import Button, { ButtonProps } from "@/components/ui/button/Button";

const meta: Meta = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ButtonProps = {
  text: "Button",
  onClick: () => console.log("Clicked 🐭!"),
};

export const PrimaryColor: Story = {
  args: args,
};
export const SecondaryColor: Story = {
  args: {
    ...args,
    color: "secondary",
  },
};

const tertiaryArgs: ButtonProps = {
  ...args,
  color: "tertiary",
};

export const TertiaryColor: Story = {
  args: tertiaryArgs,
};
