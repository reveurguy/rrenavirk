import prisma from '@/utils/prismaindex';
import Google from '@auth/core/providers/google';
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },

    async jwt({ token, account, user }) {
      if (user) {
        const existingUser = await prisma.users.findUnique({
          where: { email: user.email! },
          select: {
            id: true,
          },
        });
        if (existingUser) {
          token.id = existingUser.id;
        } else {
          const data = await prisma.users.create({
            data: {
              email: user.email!,
            },
            select: {
              id: true,
            },
          });
          token.id = data.id;
        }
      }

      return token;
    },

    async session({ session, token }) {
      // @ts-expect-error token.id is not defined in the type
      session.user.id = token.id;

      return session;
    },
  },
});
