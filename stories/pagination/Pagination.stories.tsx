import Pagination from "@/components/pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
    title: "Pagination",
    component: Pagination,
    tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pages: 5
    }
};

export const FirstPage: Story = {
    args: {
        pages: 3,
        currentPage: 1
    }
};

export const MiddlePage: Story = {
    args: {
        pages: 3,
        currentPage: 2,
    }
};

export const LastPage: Story = {
    args: {
        pages: 3,
        currentPage: 3,
    }
};

export const SinglePage: Story = {
    args: {
        pages: 1,
    }
};

export const ManyPages: Story = {
    args: {
        pages: 101,
        currentPage: 55,
    }
};

