import ButtonsSegmented from "@/components/buttons-segmented";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonsSegmented> = {
    title: "Buttons/Segmented",
    component: ButtonsSegmented,
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonsSegmented>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        values: ["Any", "1", "2", "3", "4", "5+"],
        activeIndex: 0
    }
};
