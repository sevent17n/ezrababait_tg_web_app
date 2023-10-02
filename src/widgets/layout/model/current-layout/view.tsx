"use auth";
import { useAuth } from "@/src/shared/hooks/use-auth";
import { useGetAvailablePaths } from "@/src/widgets/layout/lib/use-get-available-paths";
import { Paths } from "@/src/widgets/layout/ui/paths";

export const CurrentLayout = () => {
  const { user } = useAuth();
  const paths = useGetAvailablePaths(user);
  if (!user || user.isAdmin === "pending") return null;
  if (user.isAdmin === "housekeeper") return <Paths paths={paths} />;
  if (user.isAdmin === "admin") return <Paths paths={paths} />;
  if (user.isAdmin === "super_admin") return <Paths paths={paths} />;
};
