import ListingMainInfoColumn from "@/components/_app/listing/main-info-col";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingMainInfoColumn> = {
    title: "App/Listing/Main Info Column",
    component: ListingMainInfoColumn,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingMainInfoColumn>;

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
