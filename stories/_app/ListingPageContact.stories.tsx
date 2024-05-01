import ListingPageContact from "@/app/listing/_component/contact";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPageContact> = {
    title: "App/Listing Page/Contact",
    component: ListingPageContact,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingPageContact>;

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
