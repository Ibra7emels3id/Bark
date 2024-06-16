import { Authoptions } from "../../../../lib/nextauth"
import NextAuth from "next-auth"


const handler = NextAuth(Authoptions)

export { handler as GET, handler as POST }