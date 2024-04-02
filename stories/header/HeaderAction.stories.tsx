import HeaderAction from "@/components/header/action";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderAction> = {
  title: "Header/Action",
  component: HeaderAction,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: "Add to Bookmarks",
    onClick: () => {
      console.log("Bookmarked 🔖")
    }
  }
};
