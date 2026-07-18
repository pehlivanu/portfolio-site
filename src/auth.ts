
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized() {
      return true; // Use middleware for protection if needed, or handle in components
    },
  },
})
