"use client";

import { ChevronsUpDown, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTransition } from "react";

import { Avatar, AvatarFallback } from "@rizer/ui/components/avatar";
import { Badge } from "@rizer/ui/components/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@rizer/ui/components/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@rizer/ui/components/sidebar";

import { ROLE_LABEL, type User } from "@/entities/user";

export function UserMenu({ user }: { user: User }) {
  const [pending, startTransition] = useTransition();
  const logout = () => startTransition(() => signOut({ callbackUrl: "/login" }));

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            // 이름은 보이는 글자(이름·역할)에서 오고 "계정 메뉴"를 화면 낭독기에만 더한다. aria-label로 덮으면 보이는 글자와
            // 이름이 어긋나 음성 입력으로 고르기 어렵다(KWCAG 6.5.3). 아바타 글자는 꾸밈이라 숨긴다.
            render={<SidebarMenuButton size="lg" disabled={pending} />}
          >
            <Avatar className="size-8 rounded-lg" aria-hidden>
              <AvatarFallback className="rounded-lg">{user.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-muted-foreground">{ROLE_LABEL[user.role]}</span>
            </div>
            <span className="sr-only">계정 메뉴</span>
            <ChevronsUpDown className="ml-auto size-4" aria-hidden />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="min-w-60">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  {user.name}
                  <Badge variant="secondary">{ROLE_LABEL[user.role]}</Badge>
                </span>
                <span className="text-xs font-normal text-muted-foreground">{user.email}</span>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
