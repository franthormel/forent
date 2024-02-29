import type { Meta, StoryObj } from '@storybook/react'
import Searchbar from '@/components/searchbar'

const meta: Meta<typeof Searchbar> = {
    title: 'Searchbar',
    component: Searchbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Searchbar>

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
        width: 'large'
    }
}
