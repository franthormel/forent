import ListingCreateError from "@/app/listing/create/_components/error"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListingCreateError> = {
    title: "App/Listing Create/Error",
    component: ListingCreateError,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingCreateError>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        showError: true,
        error: "Error title"
    }
}

export const NoError: Story = {
    args: {
        showError: false
    }
}
