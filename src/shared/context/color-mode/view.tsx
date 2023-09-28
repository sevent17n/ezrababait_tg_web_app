"use client";

import { ReactNode, useEffect, useState } from "react";
import { ColorMode, ColorModeContext } from "./context";
import Cookies from "js-cookie";

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const cookies = Cookies;
  const [mode, setMode] = useState<ColorMode>(() => {
    const storedMode = cookies.get("color-mode");
    return (storedMode as ColorMode) || "light";
  });

  useEffect(() => {
    cookies.set("color-mode", mode, { expires: 365 });
  }, [mode, cookies]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
