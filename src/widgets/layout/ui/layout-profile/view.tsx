"use client";

import { useAuth } from "@/src/shared/hooks/use-auth";
import { Box, Typography } from "@mui/material";
import { ThemeToggler } from "@/src/features/theme-toggler";
import {
  StyledProfilePicture,
  StyledContainer
} from "@/src/widgets/layout/ui/layout-profile/styles";
export const LayoutProfile = () => {
  const { user } = useAuth();
  return (
    user && (
      <StyledContainer>
        <Box>
          <StyledProfilePicture
            src={user.photo_url}
            alt={user.first_name}
            width={70}
            height={70}
          />
          <Typography gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography gutterBottom>{user.username}</Typography>
        </Box>

        <ThemeToggler />
      </StyledContainer>
    )
  );
};
