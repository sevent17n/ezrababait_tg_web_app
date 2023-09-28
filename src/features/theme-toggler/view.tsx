"use client";

import React, { forwardRef } from "react";
import {
  IconStyles,
  ThemeTogglerCircleStyles,
  ThemeTogglerStyles
} from "@/src/features/theme-toggler/styles";
import IcMoon from "@/src/app/assets/icons/theme-toggler/ic_moon.svg";
import IcSun from "@/src/app/assets/icons/theme-toggler/ic_sun.svg";
import { useColorMode } from "@/src/shared/context/color-mode";
import Image from "next/image";

export const ThemeToggler = forwardRef<HTMLDivElement>((props, ref) => {
  const { mode, toggleMode } = useColorMode();

  return (
    <div>
      <ThemeTogglerStyles {...props} onClick={toggleMode} ref={ref}>
        <IconStyles>
          <Image src={IcSun} alt={"Light theme"} />
        </IconStyles>
        <IconStyles>
          <Image src={IcMoon} alt={"Dark theme"} />
        </IconStyles>
        <ThemeTogglerCircleStyles mode={mode} />
      </ThemeTogglerStyles>
    </div>
  );
});
ThemeToggler.displayName = "ThemeToggler";
