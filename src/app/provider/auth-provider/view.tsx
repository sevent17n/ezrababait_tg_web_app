"use client";

import { redirect, usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { useCheckTokens } from "@/src/app/provider/auth-provider/model/use-check-tokens";
import { useHierarchyAccess } from "@/src/app/provider/auth-provider/model/use-hierarchy-access";
import { useTgAuth } from "@/src/app/provider/auth-provider/model/use-tg-auth";
import { useAuth } from "@/src/shared/hooks/use-auth";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();

  const { isOnlySuperAdmin, isOnlyAdmin, isOnlyUser } =
    useHierarchyAccess(pathname);
  useCheckTokens();

  useTgAuth();

  if (!isLoading) {
    const isPending = user?.isAdmin === "pending";
    const isHouseKeeper = user?.isAdmin === "housekeeper";
    const isAdmin = user?.isAdmin === "admin";
    const isSuperAdmin = user?.isAdmin === "super_admin";
    if (user) {
      pathname === "/auth_page" && redirect("/");
      return <>{children}</>;
    }

    if (isSuperAdmin) return <>{children}</>;

    if (isOnlySuperAdmin) {
      pathname !== "/404" && redirect("/404");
      return null;
    }
    if (isAdmin) return <>{children}</>;

    if (isOnlyAdmin) {
      pathname !== "/404" && redirect("/404");
      return null;
    }
    if (isHouseKeeper) return <>{children}</>;

    if (isOnlyUser) {
      pathname !== "/404" && redirect("/404");
      return null;
    }

    if (isPending) {
      pathname !== "/pending_page" && redirect("/pending_page");
      return null;
    }

    return <>{children}</>;
  }
};
