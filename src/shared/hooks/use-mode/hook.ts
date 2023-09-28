'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type Mode = 'dark' | 'light';

export const useMode = (): Mode => {
	const [mode, setMode] = useState<Mode>('light');

	useEffect(() => {
		const storedMode = Cookies.get('colorMode');
		if (storedMode) {
			setMode(storedMode as Mode);
		} else {
			setMode('light');
		}
	}, []);

	return mode;
};
