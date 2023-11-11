import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// TODO: 1. custom sign in page and 2. event logging
