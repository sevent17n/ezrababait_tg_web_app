"use client";

import { BaseStyles } from "@/src/app/styles";
import { GlobalStyles } from "@/src/app/styles";
import { ReactNode } from "react";

export const StylesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyles />
      <BaseStyles />
      {children}
    </>
  );
};
