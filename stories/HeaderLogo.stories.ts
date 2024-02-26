import HeaderLogo from "@/components/header-logo/HeaderLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/UI/Text/Header Logo",
  component: HeaderLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
