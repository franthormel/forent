import ListingPagePhotos from "@/app/listing/[id]/_component/photos";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPagePhotos> = {
    title: "App/Listing Page/Photos",
    component: ListingPagePhotos,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingPagePhotos>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrls = [
    'https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa',
    'https://images.unsplash.com/photo-1598928739741-a922f245bb6d',
    'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    'https://images.unsplash.com/photo-1464890100898-a385f744067f',
    'https://images.unsplash.com/photo-1538609589535-bb35f0c034db'
];

export const SmallLayout: Story = {
    args: {
        imageUrls: imageUrls,
        listingId: "listing-id"
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
        listingId: "listing-id"
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
        listingId: "listing-id"
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
        listingId: "listing-id"
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
        listingId: "listing-id"
    },
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
