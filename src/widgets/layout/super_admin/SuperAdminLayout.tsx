import { FC, ReactNode } from 'react';
import SuperAdminHeader from '@/widgets/layout/super_admin/header/SuperAdminHeader';

const SuperAdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <SuperAdminHeader />
      {children}
    </div>
  );
};

export default SuperAdminLayout;
