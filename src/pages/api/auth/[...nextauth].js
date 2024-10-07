import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FOODIES_CLINET_ID,
      clientSecret: process.env.FOODIES_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});




