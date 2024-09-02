import ButtonSmallFilled from "@/components/buttons/small/filled";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonSmallFilled> = {
    title: "Buttons/Small/Filled",
    component: ButtonSmallFilled,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonSmallFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        text: "Base"
    }
};

export const Loading: Story = {
    args: {
        text: "Base",
        loading: true
    }
};
