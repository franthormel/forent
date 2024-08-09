import ButtonText from "@/components/buttons/text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonText> = {
    title: "Buttons/Text",
    component: ButtonText,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        text: "Base",
    }
};

export const Loading: Story = {
    args: {
        text: "Base",
        loading: true
    }
};
