import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions, SessionStrategy } from "next-auth";
import { getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

/**
 * The JWT strategy is for dev or CI environments.
 * The database strategy is for production environment.
 */
export function decideSessionStrategy(): SessionStrategy {
  if (process.env.ENVIRONMENT === "production") {
    return "database";
  }
  return "jwt";
}

export const authOptions = {
  session: {
    strategy: decideSessionStrategy(),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
    }),
  ],
} satisfies NextAuthOptions;

// Use it in server contexts
// TODO: need mock
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

/**
 * Returns a `User` object if logged in otherwise `null`.
 *
 * @returns User | null
 */
// TODO: need mock
export async function getUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
