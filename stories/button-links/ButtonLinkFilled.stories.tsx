import ButtonLinkFilled from "@/components/button-links/filled";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonLinkFilled> = {
  title: "Button Links/Filled",
  component: ButtonLinkFilled,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLinkFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: "#",
    text: "Go to Homepage"
  }
};
