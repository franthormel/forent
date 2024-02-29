import { getSessionUser } from "@/lib/auth";
import ButtonRouter from "../button-router";
import SignOutButton from "./SignOutButton";

export default async function ButtonAuth() {
    const user = await getSessionUser();

    if (user) {
        return <div className="flex flex-row gap-5">
            return <SignOutButton />
        </div>
    }

    return <ButtonRouter route="/api/auth/signin" text="Sign In" />
}
