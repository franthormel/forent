import type { Meta, StoryObj } from "@storybook/react";
import ColumnFormLayout from "@/components/ui/form/ColumnFormLayout";

const meta: Meta = {
  title: "Components/UI/Form/Column Form Layout",
  component: ColumnFormLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof ColumnFormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
