import NextAuth, { AuthOptions, SessionStrategy } from 'next-auth';
import Providers from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    session: {
        // Assuming SessionStrategy is properly defined
        strategy: 'jwt', // Example value, should match the expected SessionStrategy
        maxAge: 60 * 60 * 24 * 7, // 1 week
        updateAge: 60 * 60 * 24, // 1 day
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    callbacks: {},
    secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };