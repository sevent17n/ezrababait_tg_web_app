'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import AuthProvider from '@/providers/AuthProvider';
import { NextComponentType } from 'next';
import { TypeRoles } from '@/shared/interfaces/auth.interface';

const MainProvider: FC<{
  children: ReactNode;
  Component: NextComponentType;
}> = ({ children, Component }) => {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <AuthProvider Component={{ isOnlyUser: true }}>{children}</AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MainProvider;
