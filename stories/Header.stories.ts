import type { Meta, StoryObj } from "@storybook/react"
import Header from "../components/Header"

const meta: Meta = {
    title: "Components/Header",
    component: Header,
    
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        text: "Header"
    },
}
