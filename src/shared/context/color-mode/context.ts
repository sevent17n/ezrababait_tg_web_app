'use client';

import { createContext } from 'react';

export type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
	mode: ColorMode;
	toggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
	undefined
);
