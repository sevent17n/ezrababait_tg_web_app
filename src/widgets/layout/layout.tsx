'use client';

import { FC, ReactNode } from 'react';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import CommonUserLayout from '@/widgets/layout/common_user/CommonUserLayout';
import SuperAdminLayout from '@/widgets/layout/super_admin/SuperAdminLayout';
import AdminLayout from '@/widgets/layout/admin/AdminLayout';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.isAdmin === 'pending') return <>{children}</>;
  if (user.isAdmin === 'housekeeper')
    return <CommonUserLayout>{children}</CommonUserLayout>;
  if (user.isAdmin === 'admin') return <AdminLayout>{children}</AdminLayout>;
  if (user.isAdmin === 'super_admin')
    return <SuperAdminLayout>{children}</SuperAdminLayout>;
};

export default Layout;
