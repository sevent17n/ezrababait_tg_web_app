"use client";

import { styled } from "@mui/material/styles";

export const ContainerStyles = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  minWidth: "100vw",
  background: theme.palette.background.paper,
  transition: "background 0.3s ease",
  overflow: "hidden",
  display: "flex"
}));
