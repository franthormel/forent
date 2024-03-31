import FooterText from "@/components/footer/text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterText> = {
    title: "Footer/Text",
    component: FooterText,
    tags: ["autodocs"],
} satisfies Meta<typeof FooterText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleA: Story = {
    args: {
        value: "Contact Us"
    },
};

export const ExampleB: Story = {
    args: {
        value: "Privacy Notice"
    },
};

export const ExampleC: Story = {
    args: {
        value: "Advertise with Us"
    },
};
