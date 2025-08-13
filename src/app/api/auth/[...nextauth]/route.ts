
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


        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
        };

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
    signIn: "/auth/signin", 
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
