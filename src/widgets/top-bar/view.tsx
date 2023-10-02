"use client";

import { Search } from "@/src/features/search";
import { StyledTopBar } from "@/src/widgets/top-bar/styles";

export const TopBar = () => {
  return (
    <StyledTopBar>
      <Search type={"both"} />
    </StyledTopBar>
  );
};
