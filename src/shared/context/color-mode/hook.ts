'use client';

import { useContext } from 'react';
import { ColorModeContext } from './context';

export const useColorMode = () => {
	const context = useContext(ColorModeContext);
	if (!context) {
		throw new Error('useColorMode must be used within a ColorModeProvider');
	}

	return context;
};
