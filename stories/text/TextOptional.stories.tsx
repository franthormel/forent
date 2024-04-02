import TextOptional from "@/components/text/optional";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextOptional> = {
    title: "Text/Optional",
    component: TextOptional,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TextOptional>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Optional: Story = {};

export const Required: Story = {
    args: {
        optional: true
    }
};
