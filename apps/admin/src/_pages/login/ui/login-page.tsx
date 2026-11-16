import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { safeLocalPath } from "@rizer/domain";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@rizer/ui/components/card";

import { GUEST_PASSWORD, SEED_USERS } from "@/db/seed";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "로그인" };

const ERRORS: Record<string, string> = {
  CredentialsSignin: "이메일 또는 비밀번호가 맞지 않습니다.",
  locked: "로그인을 5번 잘못해 15분 동안 잠겼습니다. 잠시 후 다시 시도해 주세요.",
};

async function Form({ searchParams }: { searchParams: PageProps<"/login">["searchParams"] }) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? (ERRORS[params.error] ?? "로그인하지 못했습니다.") : undefined;
  return (
    <LoginForm
      // 로그인 뒤 다른 사이트로 보내지 않게 같은 사이트 안의 경로만 받는다("/\evil.com" 같은 값 포함).
      callbackUrl={safeLocalPath(params.callbackUrl)}
      initialError={error}
      guest={{ email: SEED_USERS.guest.email, password: GUEST_PASSWORD }}
    />
  );
}

export function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <main id="main" tabIndex={-1} className="flex min-h-svh items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          {/* 사이드바와 같은 브랜드 로고(블랙레터 R). 이름은 아래 제목이 전하므로 꾸밈 그림으로 둔다. */}
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[#f4f1ea]">
            <Image src="/brand/logo.png" alt="" width={28} height={28} />
          </div>
          <CardTitle>
            <h1 className="text-xl">Rizer Archive 관리</h1>
          </CardTitle>
          <CardDescription>
            전설 유물 아카이브의 유물·해설·주석을 관리합니다. 둘러보기만 하려면 게스트로 들어오세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense>
            <Form searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}
