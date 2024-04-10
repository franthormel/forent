import { restrictedPages } from "../../middleware";

/**
 * Returns the index page '/' if the given URL param is a restricted page
 *
 * @param url URL
 * @returns index page if the URL is restricted
 */
export function signOutCallbackURL(url: string): string | undefined {
  if (restrictedPages.includes(url)) {
    return "/";
  }
}
