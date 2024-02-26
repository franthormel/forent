import Header from "@/components/header/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: "Header",
  },
};
