import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/header/Header";

const meta: Meta = {
  title: "Components/UI/Text/Header",
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
