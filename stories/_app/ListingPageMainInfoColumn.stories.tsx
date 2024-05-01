import ListingPageMainInfoColumn from "@/app/listing/_component/main-info-col";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPageMainInfoColumn> = {
    title: "App/Listing Page/Main Info Column",
    component: ListingPageMainInfoColumn,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingPageMainInfoColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantA: Story = {
    args: {
        label: "Number of Seats",
        value: "23"
    },
};

export const VariantB: Story = {
    args: {
        label: "Users",
        value: "45"
    },
};

export const VariantC: Story = {
    args: {
        label: "Quarter",
        value: "1st"
    },
};
