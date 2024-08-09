import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonIconTextOutlined> = {
    title: "Buttons/Icon Text/Outlined",
    component: ButtonIconTextOutlined,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonIconTextOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        props: {
            text: "Filter",
            onClick: () => {
                console.log("Added to favorites 💗");
            },
        },
    },
    render: (args) => (
        <ButtonIconTextOutlined {...args}>
            <svg xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 -960 960 960">
                <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
            </svg>
        </ButtonIconTextOutlined>
    ),
};
