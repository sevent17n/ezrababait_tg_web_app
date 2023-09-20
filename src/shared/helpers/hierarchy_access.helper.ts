import { TypeRoles } from '@/shared/interfaces/auth.interface';

export const useHierarchyAccessHelper = (pathname: string): TypeRoles => {
  if (pathname === '/manage_groups') return { isOnlySuperAdmin: true };
  else if (pathname === '/404' || pathname === '/auth_page')
    return { isOnlyUser: true };
  else return { isOnlySuperAdmin: true };
};
