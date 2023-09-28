'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

export const Container = ({ children }: { children: ReactNode }) => {
	return <ContainerStyles>{children}</ContainerStyles>;
};

const ContainerStyles = styled.div`
	max-width: 1390px;
	padding: 0 20px;
	margin: 0 auto;
`;
