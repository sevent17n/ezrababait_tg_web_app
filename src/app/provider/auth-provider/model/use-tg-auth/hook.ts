"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/src/shared/api/services/auth";
import { redirect, usePathname, useSearchParams } from "next/navigation";

export const useTgAuth = () => {
  const pathname = usePathname();
  const queryString = useSearchParams();
  const first_name = queryString.get("first_name");
  const userid = queryString.get("userid");
  const hash = queryString.get("hash");

  const verifyObject = {
    hash,
    first_name,
    userid
  };

  const dataCheckArray = Object.entries(verifyObject).map(
    ([key, value]) => `${key}=${value}`
  );

  dataCheckArray.sort();
  const dataCheckString = dataCheckArray.join("/");
  const { data: telegram_auth_result, isLoading } = useQuery(
    ["telegram authentication"],
    async () => {
      if (hash === null || first_name === null || userid === null)
        return { unauthorized: true };
      const response = await authService.verify(dataCheckString, hash || "");
      if (response === undefined) {
        return { unauthorized: true };
      } else {
        return response;
      }
    }
  );
  if (!isLoading && !telegram_auth_result?.hasOwnProperty("unauthorized"))
    pathname !== "/" && redirect("/");
};
