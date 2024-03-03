import type { Meta, StoryObj } from '@storybook/react'
import Search from '@/components/search'

const meta: Meta<typeof Search> = {
    title: 'Search',
    component: Search,
    tags: ['autodocs'],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

function submit() {
    console.log("Searched for 👇")
}

export const SmallWidth: Story = {
    args: {
        onSubmit: submit,
        width: 'small'
    }
}
export const RegularWidth: Story = {
    args: {
        onSubmit: submit
    }
}
export const LargeWidth: Story = {
    args: {
        onSubmit: submit,
        width: 'large',
        placeholder: "fer"
    }
}
