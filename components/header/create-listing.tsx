import { getSessionUser } from "@/lib/auth";
import HeaderLink from "./link";

export default async function HeaderCreateListing() {
    const user = await getSessionUser();

    if (user) {
        return (
            <HeaderLink value='Create Listing'
                href='/listing/create/'
                dataCy='header-link-create-listing'
            />
        )
    }
}
