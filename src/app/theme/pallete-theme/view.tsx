'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';
import { getDesignTokens } from './styles';
import { useColorMode } from '@/src/shared/context/color-mode';

export const PalleteTheme = ({ children }: { children: ReactNode }) => {
	const { mode } = useColorMode();

	const theme = useMemo(() => {
		return createTheme(getDesignTokens(mode));
	}, [mode]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
