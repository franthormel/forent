import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"

import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

const prisma = new PrismaClient();
const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        })
    ]
});

// TODO:
// 1. Create custom sign in page
// 1.1 = https://next-auth.js.org/configuration/pages#oauth-sign-in
// 1.2 = https://next-auth.js.org/configuration/pages#email-sign-in

export { handler as GET, handler as POST }