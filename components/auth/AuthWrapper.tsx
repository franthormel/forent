import { getSessionUser } from "@/lib/auth";
import RouterButton from "../ui/button/RouterButton";
import SignOutButton from "./SignOutButton";

export default async function AuthWrapper() {
    const user = await getSessionUser();

    if (user) {
        return <div className="flex flex-row gap-5">
            <SignOutButton />
        </div>
    }
    return <RouterButton route="/api/auth/signin" text="Sign In" borderRadius="rounded" />
}
