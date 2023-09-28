"use auth";
import { useAuth } from "@/src/shared/hooks/use-auth";
import { CommonUserLayout } from "@/src/widgets/layout/ui/common-user-layout";
import { AdminLayout } from "@/src/widgets/layout/ui/admin-layout";
import { SuperAdminLayout } from "@/src/widgets/layout/ui/super-admin-layout";
import { useGetAvailablePaths } from "@/src/widgets/layout/lib/use-get-available-paths";

export const CurrentLayout = () => {
  const { user } = useAuth();
  const paths = useGetAvailablePaths(user);
  if (!user || user.isAdmin === "pending") return null;
  if (user.isAdmin === "housekeeper") return <CommonUserLayout paths={paths} />;
  if (user.isAdmin === "admin") return <AdminLayout paths={paths} />;
  if (user.isAdmin === "super_admin") return <SuperAdminLayout paths={paths} />;
};
