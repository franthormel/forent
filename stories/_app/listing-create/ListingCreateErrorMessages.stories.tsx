import ListingCreateErrorMessages from "@/app/listing/create/_components/error-messages"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListingCreateErrorMessages> = {
    title: "App/Listing Create/Error Messages",
    component: ListingCreateErrorMessages,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingCreateErrorMessages>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        showError: true,
        title: "Error title"
    }
}

export const NoError: Story = {
    args: {
        showError: false
    }
}
