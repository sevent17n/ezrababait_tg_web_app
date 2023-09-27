'use client';

import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { useActions } from '@/shared/lib/hooks/useActions';
import { tgAuth } from '@/shared/lib/hooks/useTgAuth';
import { useQuery } from '@tanstack/react-query';
import PendingPage from '@/app/pending_page/page';
import AuthPage from '@/app/auth_page/page';
import '../globals.css';
import { ChatService } from '@/shared/api/services/chat.service';
import { IUserState } from '@/store/user/user.interface';
const AuthProvider: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyUser, isOnlyAdmin, isOnlySuperAdmin },
}) => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const { logout, checkAuth } = useActions();

  const { data } = useQuery(
    ['tgAuth'],
    async () => !isLoading && pathname && tgAuth(user, pathname)
  );

  if (data) router.push('/');
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) checkAuth();
  }, [pathname]);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      logout();
      router.replace('/auth_page');
    }
  }, [pathname]);

  if (!isLoading) {
    const isPending = user?.isAdmin === 'pending';
    const isHouseKeeper = user?.isAdmin === 'housekeeper';
    const isAdmin = user?.isAdmin === 'admin';
    const isSuperAdmin = user?.isAdmin === 'super_admin';
    if (user) {
      pathname === '/auth_page' && router.replace('/');
      return <>{children}</>;
    }

    if (isSuperAdmin) return <>{children}</>;

    if (isOnlySuperAdmin) {
      pathname !== '/404' && router.replace('/404');
      return null;
    }
    if (isAdmin) return <>{children}</>;

    if (isOnlyAdmin) {
      pathname !== '/404' && router.replace('/404');
      return null;
    }
    if (isHouseKeeper) return <>{children}</>;

    if (isOnlyUser) {
      pathname !== '/404' && router.replace('/404');
      return null;
    }

    if (isPending) {
      pathname !== '/pending_page' && router.replace('/pending_page');
      return null;
    }

    return <>{children}</>;
  }
};

export default AuthProvider;
