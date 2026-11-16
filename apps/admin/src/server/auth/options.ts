import "server-only";

import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { getDb } from "@/db/server";

import { authenticate } from "./authenticate";

/**
 * 로그인 설정 (Auth.js v4, 이메일·비밀번호).
 * - 세션은 JWT(쿠키). getCurrentUser가 요청마다 DB에서 계정과 역할을 다시 읽는다.
 * - 운영에서는 NEXTAUTH_SECRET·NEXTAUTH_URL을 꼭 설정한다(개발 값은 .env.development).
 * - 비밀번호 확인과 연속 실패 잠금은 authenticate.ts가 맡는다.
 */
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 12 * 60 * 60 },
  pages: { signIn: "/login", error: "/login" },
  providers: [
    CredentialsProvider({
      name: "이메일",
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim();
        const password = credentials?.password;
        if (!email || !password) return null;
        const result = await authenticate(await getDb(), email, password);
        if (result.ok) return { id: result.user.id, name: result.user.name, email: result.user.email };
        if (result.reason === "locked") throw new Error("locked");
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.uid = user.id;
      return token;
    },
    session({ session, token }) {
      if (session.user && typeof token.uid === "string") {
        (session.user as { id?: string }).id = token.uid;
      }
      return session;
    },
  },
};
