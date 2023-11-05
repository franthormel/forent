import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import LinkButton from "./LinkButton"
import SignOutButton from "./SignOutButton"

export default async function AuthenticationWrapper() {
    const session = await getServerSession(authOptions);

    // Show the `Sign out` button if there is a signed in user ...
    if (session?.user) {
        return <SignOutButton />
    }

    // ... otherwise show the `Sign In` button.
    return <LinkButton href="/api/auth/signin" text='Sign In' />
}