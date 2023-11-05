import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// TODO:
// 1. Create custom sign in page
// 1.1 = https://next-auth.js.org/configuration/pages#oauth-sign-in
// 1.2 = https://next-auth.js.org/configuration/pages#email-sign-in
// 2. Add event logging
