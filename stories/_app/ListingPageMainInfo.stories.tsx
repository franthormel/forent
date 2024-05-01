import ListingPageMainInfo, { ListingPageMainInfoProps } from "@/app/listing/_component/main-info";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPageMainInfo> = {
    title: "App/Listing Page/Main Info",
    component: ListingPageMainInfo,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingPageMainInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ListingPageMainInfoProps = {
    price: 10000,
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
