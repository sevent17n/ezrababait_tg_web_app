'use client';

import { styled } from '@mui/material/styles';

type Mode = 'light' | 'dark';

type ThemeTogglerProps = {
	mode: Mode;
};

export const ThemeTogglerStyles = styled('div')(({ theme }) => ({
	width: '56px',
	height: '22px',
	background: '#070709',
	borderRadius: '3px',
	position: 'relative',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	overflow: 'hidden'
}));

export const IconStyles = styled('span')(({ theme }) => ({
	position: 'relative',
	zIndex: 5,
	top: '3px',
	padding: '0 3px'
}));

export const ThemeTogglerCircleStyles = styled('div')<ThemeTogglerProps>(
	({ theme, mode }) => ({
		width: '28px',
		height: '100%',
		background: theme.palette.purple.main,
		position: 'absolute',
		borderRadius: '3px',
		transition: 'all 0.3s ease-in-out',
		transform: `translateX(${mode === 'light' ? '0' : '28px'})`,
		top: '0',
		zIndex: 1
	})
);
