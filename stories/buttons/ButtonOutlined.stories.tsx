import ButtonOutlined from "@/components/buttons/outlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonOutlined> = {
    title: "Buttons/Outlined",
    component: ButtonOutlined,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
