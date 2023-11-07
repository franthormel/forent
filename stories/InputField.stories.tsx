import type { Meta, StoryObj } from "@storybook/react"
import InputField from "../components/InputField"

const meta: Meta = {
    title: "Components/InputField",
    component: InputField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        label: "Label",
        htmlFor: "text",
        type: "text",
        name: "text"
    },
}

export const Email: Story = {
    args: {
        label: "Email",
        htmlFor: "email",
        type: "email",
        name: "email"
    },
}

export const Password: Story = {
    args: {
        label: "Password",
        htmlFor: "password",
        type: "password",
        name: "password"
    },
}