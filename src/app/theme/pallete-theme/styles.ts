"use client";

import { PaletteMode, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
    gray: Palette["primary"];
    shadow: Palette["primary"];
    toggleButton: Palette["primary"];
  }

  interface PaletteOptions {
    purple?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    shadow?: PaletteOptions["primary"];
    toggleButton?: PaletteOptions["primary"];
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: "var(--red-hat-text-font)",
    fontSize: 14,
    ...(mode === "light" && {
      h1: {
        color: "#0E0E0E",
        fontSize: "2.5rem",
        lineHeight: "3rem",
        fontWeight: 700
      }
    }),
    ...(mode === "dark" && {
      h1: {
        color: "#FFFFFF",
        fontSize: "2.5rem",
        lineHeight: "3rem",
        fontWeight: 700
      }
    }),
    ...(mode === "light" && {
      h2: {
        color: "#0E0E0E",
        fontSize: "1.875rem",
        lineHeight: "2.375rem",
        fontWeight: 600
      }
    }),
    ...(mode === "dark" && {
      h2: {
        color: "#FFFFFF",
        fontSize: "1.875rem",
        lineHeight: "2.375rem",
        fontWeight: 600
      }
    }),
    ...(mode === "light" && {
      h3: {
        color: "#0E0E0E",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: 600
      }
    }),
    ...(mode === "dark" && {
      h3: {
        color: "#FFFFFF",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: 600
      }
    }),
    ...(mode === "light" && {
      subtitle1: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "#0E0E0E",
        fontWeight: 500,
        "& > span": {
          fontWeight: 600
        }
      }
    }),
    ...(mode === "dark" && {
      subtitle1: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "#FFFFFF",
        fontWeight: 500,
        "& > span": {
          fontWeight: 600
        }
      }
    }),
    ...(mode === "light" && {
      subtitle2: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "#A9B7BD",
        fontWeight: 500
      }
    }),
    ...(mode === "dark" && {
      subtitle2: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "#A9B7BD",
        fontWeight: 500
      }
    })
  },
  palette: {
    mode,
    error: {
      main: "#EB5757",
      light: "rgba(253, 242, 242, 1)"
    },
    purple: {
      main: "#7C69F4"
    },
    ...(mode === "light" && {
      toggleButton: {
        main: "#E1DFFD",
        light: "#7C69F4",
        contrastText: "#7C69F4"
      }
    }),
    ...(mode === "dark" && {
      toggleButton: {
        main: "#080809",
        light: "#313035",
        contrastText: "#A9B7BD"
      }
    }),
    ...(mode === "light" && {
      gray: {
        main: "#F5F3F8",
        light: "#A9B7BD"
      }
    }),
    ...(mode === "dark" && {
      gray: {
        main: "rgba(255, 255, 255, 0.10)",
        light: "#A9B7BD"
      }
    }),
    ...(mode === "light" && {
      shadow: {
        main: "10px 10px 50px 0px rgba(124, 105, 244, 0.20)"
      }
    }),
    ...(mode === "dark" && {
      shadow: {
        main: ""
      }
    }),
    ...(mode === "dark" && {
      background: {
        default: "#2D2D2D",
        paper: "#1A191F"
      }
    }),
    ...(mode === "light" && {
      background: {
        default: "#FFFFFF",
        paper: "#FAFDFF"
      }
    }),
    ...(mode === "light" && {
      text: {
        primary: "#0E0E0E",
        secondary: "#7C69F4"
      }
    }),
    ...(mode === "dark" && {
      text: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
      }
    })
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#7C69F4",
          padding: "0.875rem 1.5rem",
          borderRadius: "10px",
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "#FFFFFF",
          fontWeight: 500,
          textTransform: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",

          "&:hover": {
            background: "#7C69F4"
          },

          "&.Mui-disabled": {
            ...(mode === "dark" && {
              background: "#424242"
            }),
            ...(mode === "light" && {
              background: "#F5F3F8",
              color: "#AFB6BE"
            })
          }
        }
      }
    }
  }
});
