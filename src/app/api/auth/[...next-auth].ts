import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({})
    // ...add more providers here
  ]
};
export default NextAuth(authOptions);
