import { styled } from "@mui/material/styles";
import { Card, Container } from "@mui/material";

export const StyledLayoutContainer = styled(Container)(({ theme }) => ({
  maxWidth: "100%",
  height: 56,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));
