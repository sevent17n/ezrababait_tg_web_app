"use client";

import { useState } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { CurrentLayout } from "@/src/widgets/layout/model/current-layout";
import { Box } from "@mui/material";
import { LayoutProfile } from "@/src/widgets/layout/ui/layout-profile";
import { StyledLayout } from "@/src/widgets/layout/styles";

export const Layout = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(isLargeScreen);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      {isLargeScreen ? (
        <StyledLayout>
          <Box>
            <LayoutProfile />
          </Box>

          <CurrentLayout />
        </StyledLayout>
      ) : (
        <>
          <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <Typography>menu</Typography>
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
            <Box>
              <LayoutProfile />
            </Box>

            <CurrentLayout />
          </Drawer>
        </>
      )}
    </Box>
  );
};
