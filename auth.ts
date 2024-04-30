import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "./app/lib/config";
import { comparePassword } from "./app/lib/data";
import { v4 as uuid } from "uuid";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
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
      async profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile.name,
          image: profile.picture,
        };
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  cookies: {
    sessionToken: {
      name: "session_token",
      options: {
        httpOnly: true,
      },
    },
    csrfToken: {
      name: "csrf_token",
      options: {
        httpOnly: true,
      },
    },
    callbackUrl: {
      name: "callback_url",
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          googleId: token.googleId,
        };
      }
      return token;
    },
    //@ts-ignore
    async session({ session, token }) {
      const { user } = session;

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser && token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: existingUser.id,
          },
        };
      }
      const id = uuid();
      const newUser = await prisma.user.create({
        data: {
          id,
          email: user.email,
          name: user.name,
          profileImage: user.image,
        },
      });
      console.log({ session });
      return {
        ...session,
        user: {
          ...session.user,
          id: newUser.id,
        },
      };
    },
  },
  secret: process.env.AUTH_SECRET as string,
  session: {
    strategy: "jwt",
    maxAge: 60 * 10080, // 7days
  },
});
