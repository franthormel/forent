import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonsSegmentedLabelled> = {
    title: "Buttons/Segmented/Labelled",
    component: ButtonsSegmentedLabelled,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonsSegmentedLabelled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        values: ["Any", "1", "2", "3", "4", "5+"],
        label: "Options",
        activeIndex: 3,
    }
};
