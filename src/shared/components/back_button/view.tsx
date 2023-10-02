"use client";

import { Button } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { StyledBackButton } from "@/src/shared/components/back_button/styles";

export const BackButton = () => {
  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      <IoIosArrowBack />
    </StyledBackButton>
  );
};
