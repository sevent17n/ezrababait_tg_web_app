"use client";

import { CurrentLayout } from "@/src/widgets/layout/model/current-layout";
import { LayoutProfile } from "@/src/widgets/layout/ui/layout-profile";
import { StyledLayoutContainer } from "@/src/widgets/layout/styles";

export const Layout = () => {
  return (
    <StyledLayoutContainer>
      <LayoutProfile />
      <CurrentLayout />
    </StyledLayoutContainer>
  );
};
