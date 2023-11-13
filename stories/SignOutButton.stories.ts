import type { Meta, StoryObj } from "@storybook/react";
import SignOutButton from "@/components/SignOutButton";

const meta: Meta = {
  title: "Components/SignOutButton",
  component: SignOutButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignOutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignOut: Story = {};