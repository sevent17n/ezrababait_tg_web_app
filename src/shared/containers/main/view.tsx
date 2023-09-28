'use client';

import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
	return <MainStyles>{children}</MainStyles>;
};

const MainStyles = styled.main`
	padding: 10px 0 40px 0;
`;
