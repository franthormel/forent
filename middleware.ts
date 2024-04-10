export { default } from "next-auth/middleware";

// NOTE: Values must be the same
export const restrictedPages: string[] = ["/listing/create"];

export const config = {
  // NOTE: Values msut be the same
  matcher: ["/listing/create"],
};
