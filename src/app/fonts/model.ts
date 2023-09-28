import { clsx } from "clsx";

import { redHatText } from "./fonts";

export const getFonts = (): string => {
  return clsx(redHatText.variable);
};
