import type { Meta, StoryObj } from "@storybook/react";
import SectionHeaderIcon from "@/components/section/header-icon";

const meta: Meta<typeof SectionHeaderIcon> = {
    title: "Section Header Icon",
    component: SectionHeaderIcon,
    tags: ["autodocs"],
} satisfies Meta<typeof SectionHeaderIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantA: Story = {
    args: {
        props: {
            text: "Contact"
        }
    },
    render: (args) => (
        <SectionHeaderIcon {...args}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path
                    d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z" />
            </svg>
        </SectionHeaderIcon>
    ),
};

export const VariantB: Story = {
    args: {
        props: {
            text: "Description"
        }
    },
    render: (args) => (
        <SectionHeaderIcon {...args}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path
                    d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
        </SectionHeaderIcon>
    ),
};
