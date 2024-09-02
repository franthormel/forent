import ButtonSmallOutlined from "@/components/buttons/small/outlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonSmallOutlined> = {
    title: "Buttons/Small/Outlined",
    component: ButtonSmallOutlined,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonSmallOutlined>;

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
