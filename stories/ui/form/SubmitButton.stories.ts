import type { Meta, StoryObj } from "@storybook/react";
import SubmitButton, {
  SubmitButtonProps,
} from "@/components/ui/form/SubmitButton";

const meta: Meta = {
  title: "Components/UI/Form/Button",
  component: SubmitButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
