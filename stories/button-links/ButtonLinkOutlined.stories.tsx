import ButtonLinkOutlined from "@/components/button-links/outlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonLinkOutlined> = {
    title: "Button Links/Outlined",
    component: ButtonLinkOutlined,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonLinkOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        href: "#",
        text: "Go to Homepage"
    }
};
