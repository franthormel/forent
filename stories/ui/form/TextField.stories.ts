import type { Meta, StoryObj } from "@storybook/react";

import TextField from "@/components/ui/form/TextField";

const meta: Meta = {
  title: "Components/UI/Form/Text Field",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
