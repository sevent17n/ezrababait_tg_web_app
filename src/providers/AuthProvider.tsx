'use client';

import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface';
import { useAuth } from '@/shared/hooks/useAuth';
import { useActions } from '@/shared/hooks/useActions';
import CheckRole from '@/providers/CheckRole';
import { tgAuth } from '@/shared/hooks/useTgAuth';
import { useQuery } from '@tanstack/react-query';

const AuthProvider: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyUser, isOnlyAdmin, isOnlySuperAdmin },
}) => {
  const { user } = useAuth();
  const { logout, checkAuth } = useActions();
  const pathname = usePathname();
  const { data } = useQuery(['tgAuth'], async () => tgAuth());
  const router = useRouter();
  if (data) router.push('/');
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) checkAuth();
  }, [user]);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && user) logout();
  }, [pathname]);
  return !isOnlySuperAdmin && !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <CheckRole Component={{ isOnlyUser, isOnlyAdmin, isOnlySuperAdmin }}>
      {children}
    </CheckRole>
  );
};

export default AuthProvider;
