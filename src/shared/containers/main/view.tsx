"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Container } from "@mui/material";

export const Main = ({ children }: { children: ReactNode }) => {
  return <MainStyles>{children}</MainStyles>;
};

const MainStyles = styled(Container)`
  padding: 20px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;
