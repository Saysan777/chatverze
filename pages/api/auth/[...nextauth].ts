import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  //* Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],

  //* either add the following redirect url here or add it in console.cloud.google.com
  //* callbackUrl: 'http://localhost:3000/api/auth/callback/google',
}
export default NextAuth(authOptions)