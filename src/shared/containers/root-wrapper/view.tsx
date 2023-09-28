'use client';

import { ReactNode } from 'react';
import { ContainerStyles } from '@/src/shared/containers/root-wrapper/styles';

export const Wrapper = ({ children }: { children: ReactNode }) => {
	return <ContainerStyles>{children}</ContainerStyles>;
};
