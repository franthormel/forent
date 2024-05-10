import ButtonText from "@/components/buttons/text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonText> = {
    title: "Buttons/Text",
    component: ButtonText,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        text: "Base"
    }
};

export const Small: Story = {
    args: {
        text: "Small",
        size: "small"
    }
};
