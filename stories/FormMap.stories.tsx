import FormMap from "@/components/form-map";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormMap> = {
  title: "Form Map",
  component: FormMap,
  tags: ["autodocs"],
} satisfies Meta<typeof FormMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    targetId: "map-example-01",
  },
};
export const WithError: Story = {
  args: {
    errorMessage: "Invalid location selected",
    targetId: "map-error-02",
  },
};
