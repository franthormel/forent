import ListingCreateHeader from "@/app/listing/create/_components/header"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListingCreateHeader> = {
    title: "App/Listing Create/Header",
    component: ListingCreateHeader,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingCreateHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Email: Story = {}
