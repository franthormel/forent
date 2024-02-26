import type { Meta, StoryObj } from "@storybook/react";
import FormMap, { FormMapProps } from "@/components/form-map/FormMap";

const meta: Meta = {
  title: "Components/UI/Map/Map Form",
  component: FormMap,
  tags: ["autodocs"],
} satisfies Meta<typeof FormMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: FormMapProps = {
  targetId: "map-example-01",
};
export const Example: Story = {
  args: args,
};

const argsWithError: FormMapProps = {
  errorMessage: "Invalid location selected",
  targetId: "map-error-02",
};
export const WithError: Story = {
  args: argsWithError,
};
