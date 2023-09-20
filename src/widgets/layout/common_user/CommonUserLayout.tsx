import { FC, ReactNode } from 'react';

const CommonUserLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header>Common layout</header>
      {children}
    </>
  );
};

export default CommonUserLayout;
