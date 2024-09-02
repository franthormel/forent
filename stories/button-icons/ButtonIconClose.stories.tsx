import ButtonIconClose from "@/components/button-icons/close";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonIconClose> = {
    title: "Button Icons/Close",
    component: ButtonIconClose,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonIconClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        size: 48,
        onClick: () => {
            console.log("Added to favorites 💗");
        },
    },
};
