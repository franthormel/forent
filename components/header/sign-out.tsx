"use client"

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import HeaderAction from "./action";
import { signOutCallbackURL } from "./functions";

export default function HeaderSignOut() {
    const pathname = usePathname();

    return <HeaderAction value="Sign Out"
        onClick={() => {
            signOut({ callbackUrl: signOutCallbackURL(pathname) })
        }}
        dataCy='header-sign-out' />
}
