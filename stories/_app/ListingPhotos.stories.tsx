import ListingPhotos from "@/app/listing/[id]/photos/_component/photos";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPhotos> = {
    title: "App/Listing/Photos",
    component: ListingPhotos,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingPhotos>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrls = [
    "https://images.unsplash.com/photo-1551806235-a05dd14a54c7",
    "https://images.unsplash.com/photo-1558442074-3c19857bc1dc",
    "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e",
    "https://images.unsplash.com/photo-1560448076-ee77deea722b",
    "https://images.unsplash.com/photo-1560448204-61dc36dc98c8",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1560448205-17d3a46c84de",
    "https://images.unsplash.com/photo-1560448205-97abe7378152",
];

export const SmallLayout: Story = {
    args: {
        imageUrls: imageUrls
    },
    parameters: {
        viewport: {
            defaultViewport: 'small',
        },
    },
};

export const MediumLayout: Story = {
    args: {
        imageUrls: imageUrls
    },
    parameters: {
        viewport: {
            defaultViewport: 'md',
        },
    },
};

export const LargeLayout: Story = {
    args: {
        imageUrls: imageUrls
    },
    parameters: {
        viewport: {
            defaultViewport: 'lg',
        },
    },
};

export const ExtraLargeLayout: Story = {
    args: {
        imageUrls: imageUrls
    },
    parameters: {
        viewport: {
            defaultViewport: 'xl',
        },
    },
};

export const ExtraExtraLargeLayout: Story = {
    args: {
        imageUrls: imageUrls
    },
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
