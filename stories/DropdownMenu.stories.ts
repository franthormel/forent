import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "@/components/DropdownMenu";

const meta: Meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
