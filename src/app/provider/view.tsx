"use client";

import { FC, ReactNode } from "react";
import { QueryProvider } from "@/src/app/provider/query-provider";
import { StoreProvider } from "@/src/app/provider/store-provider";
import { StylesProvider } from "@/src/app/provider/styles-provider";
import { ColorModeProvider } from "@/src/shared/context/color-mode";
import { PalleteTheme } from "@/src/app/theme/pallete-theme";
import { AuthProvider } from "@/src/app/provider/auth-provider";
import { Layout } from "@/src/widgets/layout";
import { Wrapper } from "@/src/shared/containers/root-wrapper";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StylesProvider>
      <ColorModeProvider>
        <PalleteTheme>
          <QueryProvider>
            <StoreProvider>
              <Wrapper>
                <Layout />
                <AuthProvider>{children}</AuthProvider>
              </Wrapper>
            </StoreProvider>
          </QueryProvider>
        </PalleteTheme>
      </ColorModeProvider>
    </StylesProvider>
  );
};
