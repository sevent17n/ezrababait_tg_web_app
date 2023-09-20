'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import AuthProvider from '@/app/providers/AuthProvider';
import { useHierarchyAccessHelper } from '@/shared/helpers/hierarchy_access.helper';
import { usePathname } from 'next/navigation';

const MainProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const client = new QueryClient();
  const pathname = usePathname();
  const accessLevel = useHierarchyAccessHelper(pathname || '');
  if (pathname) {
    return (
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <AuthProvider Component={accessLevel}>{children}</AuthProvider>
        </Provider>
      </QueryClientProvider>
    );
  }
};

export default MainProvider;
