import Search from "@/components/search";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularWidth: Story = {
  args: {
    onSubmit: () => {
      console.log("Searching 🔍");
    },
  },
};
