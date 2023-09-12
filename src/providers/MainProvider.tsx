'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import AuthProvider from '@/providers/AuthProvider';

const MainProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
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
