import { getSessionUser } from "@/lib/auth";
import HeaderLink from "./link";
import HeaderSignOut from "./sign-out";

export default async function HeaderAuth() {
    const user = await getSessionUser();

    if (user) {
        return <HeaderSignOut />
    }

    return <HeaderLink value="Sign In"
        href="/api/auth/signin"
        dataCyHeader='header-sign-in'
        dataCyHeaderLink='header-link-sign-in' />
}
