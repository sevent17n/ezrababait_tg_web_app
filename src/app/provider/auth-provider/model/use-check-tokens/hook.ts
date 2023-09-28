"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useActions } from "@/src/shared/hooks/use-actions";
import { redirect, usePathname, useRouter } from "next/navigation";

export const useCheckTokens = () => {
  const pathname = usePathname();
  const { logout, checkAuth } = useActions();
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) checkAuth();
  }, [pathname]);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      logout();
      pathname !== "/auth_page" && redirect("/auth_page");
    }
  }, [pathname]);
};
