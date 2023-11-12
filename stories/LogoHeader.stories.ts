import type { Meta, StoryObj } from "@storybook/react"
import LogoHeader from "../components/LogoHeader"

const meta: Meta = {
    title: "Components/LogoHeader",
    component: LogoHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LogoHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
