import ButtonTextIconOutlined from "@/components/buttons/text-icon-outlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonTextIconOutlined> = {
    title: "Buttons/Text Icon/Outlined",
    component: ButtonTextIconOutlined,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonTextIconOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        props: {
            text: "Select",
            onClick: () => {
                console.log("Selected ⭐");
            },
        },
    },
    render: (args) => (
        <ButtonTextIconOutlined {...args}>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                height="24"
                width="24">
                <path d="M480-360 280-560h400L480-360Z" />
            </svg>
        </ButtonTextIconOutlined>
    ),
};
