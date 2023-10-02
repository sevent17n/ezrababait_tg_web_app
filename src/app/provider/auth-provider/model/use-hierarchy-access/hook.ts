import { TypeRoles } from "@/src/app/provider/auth-provider/interface";

export const useHierarchyAccess = (pathname: string): TypeRoles => {
  if (pathname === "/manage_groups") return { isOnlySuperAdmin: true };
  else if (pathname === "/auth_page") return { isOnlyUser: false };
  else if (pathname === "/404") return { isOnlyUser: false };
  else return { isOnlySuperAdmin: true };
};
