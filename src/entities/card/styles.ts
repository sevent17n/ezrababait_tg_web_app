import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const StyledCard = styled(Card)`
  border-radius: 12px;
  border: 1px solid black;
  width: 110px;

  > div {
    width: 100%;
  }
`;

export const StyledImageContainer = styled(Box)`
  width: 110px;
  height: 80px;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const StyledCardTitle = styled(Box)``;
