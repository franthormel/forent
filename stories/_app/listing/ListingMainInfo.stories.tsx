import ListingMainInfo, { ListingMainInfoProps } from "@/components/_app/listing/main-info";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingMainInfo> = {
    title: "App/Listing/Main Info",
    component: ListingMainInfo,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingMainInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ListingMainInfoProps = {
    price: 10000,
    deposit: -20,
    beds: 2,
    baths: 1,
    area: 25,
    availableDate: null,
    addressLine: "201 Trent Suite 800",
    city: "Abbottstad",
    state: "Massachusetts",
    zipCode: 36420
};

export const SmallLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'small',
        },
    },
};

export const MediumLayout: Story = {
    args: {
        ...defaultArgs,
        price: 25000,
        deposit: 0,
        beds: 3,
        baths: 2,
        availableDate: new Date("2035-04-25T00:00:00.000Z"),
        zipCode: null
    },
    parameters: {
        viewport: {
            defaultViewport: 'md',
        },
    },
};

export const LargeLayout: Story = {
    args: {
        ...defaultArgs,
        deposit: 500,
        beds: 1,
        baths: 1,
    },
    parameters: {
        viewport: {
            defaultViewport: 'lg',
        },
    },
};

export const ExtraLargeLayout: Story = {
    args: {
        ...defaultArgs,
        deposit: 20000,
        price: 123456,
        beds: 12,
        baths: 7,
        availableDate: new Date("2050-04-25T00:00:00.000Z"),
        zipCode: null
    },
    parameters: {
        viewport: {
            defaultViewport: 'xl',
        },
    },
};

export const ExtraExtraLargeLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
