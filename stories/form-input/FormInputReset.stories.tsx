import FormInputReset from "@/components/form-input/reset";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormInputReset> = {
    title: "Form Input/Reset",
    component: FormInputReset,
    tags: ["autodocs"],
} satisfies Meta<typeof FormInputReset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};
