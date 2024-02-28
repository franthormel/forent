import { getSessionUser } from "@/lib/auth";
import ButtonRouter from "../buttons/ButtonRouter";
import SignOutButton from "./SignOutButton";

export default async function AuthButton() {
    const user = await getSessionUser();

    if (user) {
        return <div className="flex flex-row gap-5">
            return <SignOutButton />
        </div>
    }

    return <ButtonRouter route="/api/auth/signin" text="Sign In" />
}
