import type { Meta, StoryObj } from "@storybook/react"
import FormSubmitButton from "../components/FormSubmitButton"

const meta: Meta = {
    title: "FormSubmitButton",
    component: FormSubmitButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FormSubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
    args: {
        text: "Enabled"
    },
}

export const Disabled: Story = {
    args: {
        text: 'Disabled',
        disabled: true,
    },
}

