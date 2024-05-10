import ListingBanner from "@/app/listing/[id]/_component/banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingBanner> = {
    title: "App/Listing/Banner",
    component: ListingBanner,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrls = [
    "https://images.unsplash.com/photo-1630699294197-6ac1c11ae156",
    "https://images.unsplash.com/photo-1630699375895-fe5996d163ee",
    "https://images.unsplash.com/photo-1630699376167-3870469e7598",
    "https://images.unsplash.com/photo-1632210702485-e1841e30752a",
    "https://images.unsplash.com/photo-1632323091845-f636f89749fa",
    "https://images.unsplash.com/photo-1633104069776-ea7e61258ec9",
    "https://images.unsplash.com/photo-1633505528166-407a12a88a04",
    "https://images.unsplash.com/photo-1633505650701-6104c4fc72c2",
    "https://images.unsplash.com/photo-1633505899118-4ca6bd143043",
    "https://images.unsplash.com/photo-1634547476021-c1155c01616c",
    "https://images.unsplash.com/photo-1634547532213-a4b8d7ff8927",
    "https://images.unsplash.com/photo-1638885930125-85350348d266",
    "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf",
    "https://images.unsplash.com/photo-1649068431121-72182cd8ca27",
    "https://images.unsplash.com/photo-1650137938625-11576502aecd",
];

export const SmallLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'small',
        },
    },
};

export const MediumLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'md',
        },
    },
};

export const LargeLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'lg',
        },
    },
};

export const ExtraLargeLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'xl',
        },
    },
};

export const ExtraExtraLargeLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
