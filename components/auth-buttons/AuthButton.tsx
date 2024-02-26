import { getSessionUser } from "@/lib/auth";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

export default async function AuthButton() {
    const user = await getSessionUser();

    if (user) {
        return <div className="flex flex-row gap-5">
            return <SignOutButton />
        </div>
    }

    return <SignInButton />
}
