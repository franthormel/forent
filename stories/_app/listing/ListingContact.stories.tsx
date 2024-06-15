import ListingContact from "@/components/_app/listing/contact";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingContact> = {
    title: "App/Listing/Contact",
    component: ListingContact,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
    args: {
        email: "hello@kitty.cat"
    },
};

export const EmailName: Story = {
    args: {
        name: "Hello Kitty",
        email: "hello@kitty.cat"
    },
};

export const Complete: Story = {
    args: {
        name: "Hello Kitty",
        email: "hello@kitty.cat",
        contactNumber: "1-HELLO-KITTY-CAT"
    },
};
