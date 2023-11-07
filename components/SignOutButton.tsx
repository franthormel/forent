"use client"

import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return <button className="bg-blue-500 px-3 py-2 rounded-full w-fit"
        onClick={() => signOut()}>
        Sign Out
    </button>
}
