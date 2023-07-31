import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "email here",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as any;
        const user = {
          id: "1",
          email: "tiehisungai@gmail.com",
          name: "Tiehisung Soskode",
          password: "sos",
          image: "/model-icon.png",
        };
        if (
          credentials &&
          username === user.email &&
          password === user.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  // pages: {},
  // secret: "",
  // session: {
  //   strategy: "jwt",
  // },
};
