import HeaderLogo from "@/components/header-logo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderLogo> = {
  title: "Header Logo",
  component: HeaderLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
