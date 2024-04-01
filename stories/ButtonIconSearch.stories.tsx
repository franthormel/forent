import ButtonIconSearch from "@/components/button-icons/search";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonIconSearch> = {
  title: "Button Icons/Search",
  component: ButtonIconSearch,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonIconSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    size: 48,
    onClick: () => {
      console.log("Added to favorites 💗");
    },
  },
};
