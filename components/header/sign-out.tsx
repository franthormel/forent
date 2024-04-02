"use client"

import HeaderAction from "./action";
import { signOut } from "next-auth/react";

export default function HeaderSignOut() {
    return <HeaderAction value="Sign Out"
        onClick={() => signOut()}
        dataCy='header-sign-out' />
}
