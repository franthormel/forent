"use client"

import { signOut } from "next-auth/react"
import Button from "../buttons/Button"

export default function SignOutButton() {
    return <Button onClick={() => signOut()}
        text='Sign Out'
        dataCy="signout-button"
        color="primary"
    />
}
