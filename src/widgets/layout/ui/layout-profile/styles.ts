import styled from "@emotion/styled";
import Image from "next/image";
import { Container } from "@mui/material";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

export const StyledProfilePicture = styled(Image)`
  border-radius: 50%;
`;
