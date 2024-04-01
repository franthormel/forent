import ButtonIconMenu from "@/components/button-icons/menu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonIconMenu> = {
  title: "Button Icons/Menu",
  component: ButtonIconMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonIconMenu>;

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
