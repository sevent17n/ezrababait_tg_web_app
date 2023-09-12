import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface';

const CheckRole: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser, isOnlySuperAdmin },
}) => {
  const { user } = useAuth();

  const pathName = usePathname();
  const router = useRouter();

  const Children = () => <>{children}</>;

  if (user?.isAdmin) return <Children />;

  if (isOnlyAdmin || isOnlySuperAdmin) {
    pathName !== '/404' && router.replace('/404');
    return null;
  }

  const isUser = user && !user.isAdmin;

  if (isUser && isOnlyUser) return <Children />;
  else {
    pathName !== '/auth_page' && router.replace('/auth_page');
    return <Children />;
  }
};

export default CheckRole;
