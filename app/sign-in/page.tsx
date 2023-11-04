import FormSubmitButton from "@/components/FormSubmitButton"
import InputField from "@/components/InputField"

export default function SignIn() {
    return (
        <main className="flex flex-col space-y-4">
            <header className="text-4xl">Sign In</header>
            <form method="POST" className="space-y-4">
                <InputField
                    htmlFor="email"
                    label="Email"
                    name="email"
                    type="email"
                    required={true}
                />
                <InputField
                    htmlFor="password"
                    label="Password"
                    name="password"
                    type="password"
                    required={true}
                />
                <FormSubmitButton />
            </form>
        </main>
    )
}