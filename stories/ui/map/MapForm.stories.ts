import type { Meta, StoryObj } from "@storybook/react";
import MapForm, { MapFormProps } from "@/components/ui/map/MapForm";

const meta: Meta = {
  title: "Components/UI/Map/Map Form",
  component: MapForm,
  tags: ["autodocs"],
} satisfies Meta<typeof MapForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: MapFormProps = {
  targetId: "map-example-01",
};
export const Example: Story = {
  args: args,
};

const argsWithErrorMessage: MapFormProps = {
  errorMessage: "Invalid location selected",
  targetId: "map-error-02",
};
export const WithErrorMessage: Story = {
  args: argsWithErrorMessage,
};
