import type { Meta, StoryObj } from "@storybook/react";
import CardListing from "@/components/card-listing";

const meta: Meta<typeof CardListing> = {
  title: "Card Listing",
  component: CardListing,
  tags: ["autodocs"],
} satisfies Meta<typeof CardListing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantA: Story = {
  args: {
    addressLine1: "Pdi Building 71 Maysilo Street Boni Avenue 1550",
    addressLine2: "Mandaluyong City",
    area: "45",
    baths: 2,
    beds: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1708113388262-17fdf0e21205?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Php 18,900/mo",
  },
};

export const VariantB: Story = {
  args: {
    addressLine1: "333 Juan Luna St.",
    addressLine2: "Manila, Metro Manila",
    area: "27",
    baths: "1",
    beds: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1708111776235-990d08c84658?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Php 8,000/mo",
  },
};

export const VariantC: Story = {
  args: {
    addressLine1: "114 A. Bonifacio Avenue",
    addressLine2: "Marikina",
    area: "67",
    baths: "2",
    beds: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1708111776233-fe90aaf09a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    price: "Php 32,500/mo",
  },
};
