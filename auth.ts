import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./app/lib/config";
import { comparePassword } from "./app/lib/data";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "text", label: "Email" },
        password: { type: "text", label: "Password" },
      },
      async authorize(credentials, request) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //check email or password is valid.
        if (email || password) {
          const user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            throw new Error("invalid email or password");
          }
          // check user password right or wrong.
          const checkPassword = await comparePassword(
            password,
            user?.password || ""
          );
          if (!checkPassword) {
            throw new Error("invalid email or password");
          } else {
            return user;
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, user, profile }) {
      return true;
    },
    async jwt({ token, user, trigger }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    //@ts-ignore
    async session({ session, token }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
          },
        };
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 10080, // 7days
  },
});
