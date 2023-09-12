import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface';
import { useAuth } from '@/shared/hooks/useAuth';
import { useActions } from '@/shared/hooks/useActions';
import CheckRole from '@/providers/CheckRole';

const AuthProvider: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyUser, isOnlyAdmin, isOnlySuperAdmin },
}) => {
  const { user } = useAuth();
  const { logout, checkAuth } = useActions();
  const pathname = usePathname();
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && user) logout();
  }, [pathname]);
  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <CheckRole Component={{ isOnlyUser, isOnlyAdmin }}>{children}</CheckRole>
  );
};

export default AuthProvider;
