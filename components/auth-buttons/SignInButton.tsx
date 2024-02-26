import ButtonRouter from "../buttons/ButtonRouter";

export default function SignInButton() {
    return <ButtonRouter route="/api/auth/signin" text="Sign In" borderRadius="rounded" />
}