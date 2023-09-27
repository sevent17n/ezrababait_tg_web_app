import { TypeRoles } from '@/shared/interfaces/auth.interface';

export const useHierarchyAccessHelper = (pathname: string): TypeRoles => {
  if (pathname === '/manage_groups') return { isOnlySuperAdmin: true };
  else if (pathname === '/auth_page') return { isOnlyUser: false };
  else if (pathname === '/404') return { isOnlyUser: false };
  else return { isOnlySuperAdmin: true };
};
