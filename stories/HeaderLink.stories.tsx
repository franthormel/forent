import HeaderLink from "@/components/header/link";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderLink> = {
  title: "Header Link",
  component: HeaderLink,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: "/",
    value: "Click me",
  },
};
