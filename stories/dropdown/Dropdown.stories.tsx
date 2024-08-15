import Dropdown from "@/components/dropdown";
import FormInput from "@/components/form-input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
    title: "Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
    args: {
        props: {
            text: "Filters",
        },
    },
    render: (args) => (
        <Dropdown {...args}>
            <div className="flex flex-col gap-5 w-48">
                <FormInput label="Minimum Price"
                    name="price-min"
                    placeholder="None" />
                <FormInput label="Maximum Price"
                    name="price-min"
                    placeholder="₱ 10,000,000" />
            </div>
        </Dropdown>
    ),
};

export const Open: Story = {
    args: {
        props: {
            text: "Filters",
            display: true
        },
    },
    render: (args) => (
        <Dropdown {...args}>
            <div className="flex flex-col gap-5 w-48">
                <FormInput label="Minimum Price"
                    name="price-min"
                    placeholder="None" />
                <FormInput label="Maximum Price"
                    name="price-min"
                    placeholder="₱ 10,000,000" />
            </div>
        </Dropdown>
    ),
};
