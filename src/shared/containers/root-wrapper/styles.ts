"use client";

import { styled } from "@mui/material/styles";

export const ContainerStyles = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  background: theme.palette.background.paper,
  transition: "background 0.3s ease",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}));
