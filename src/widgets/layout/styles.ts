import { styled } from "@mui/material/styles";

export const StyledLayout = styled("div")(({ theme }) => ({
  minWidth: 250,
  borderRight: `1px solid ${theme.palette.primary.main}`,
  height: "100%"
}));
