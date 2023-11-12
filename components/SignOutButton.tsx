"use client"

import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return <button className="w-fit rounded-full bg-blue-500 px-3 py-2"
        onClick={() => signOut()}
        data-cy="sign-out-button">
        Sign Out
    </button>
}
