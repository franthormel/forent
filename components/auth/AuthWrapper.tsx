import { getUser } from "@/lib/auth";
import RouterButton from "../ui/buttons/RouterButton";
import SignOutButton from "./SignOutButton";
import Image from "next/image";
import { DefaultSession } from "next-auth";

export default async function AuthWrapper() {
    const user = await getUser();

    if (user) {
        return <div className="flex flex-row gap-5">
            <SignOutButton />
        </div>
    }
    return <RouterButton route="/api/auth/signin" text="Sign In" borderRadius="rounded" />
}
