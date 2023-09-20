import { FC, ReactNode } from 'react';

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>AdminLayout</header>
      {children}
    </div>
  );
};

export default AdminLayout;
