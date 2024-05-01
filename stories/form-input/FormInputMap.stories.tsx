import FormInputMap from "@/components/form-input/map";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormInputMap> = {
  title: "Form Input/Map",
  component: FormInputMap,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FormInputMap>;

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
