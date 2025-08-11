
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Example: Replace with your real authentication logic
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
        };

        // Example: Validate credentials (hardcoded here for demo)
        if (
          credentials.username === "jsmith" &&
          credentials.password === "password123"
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // optional custom sign-in page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // must be set in .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
