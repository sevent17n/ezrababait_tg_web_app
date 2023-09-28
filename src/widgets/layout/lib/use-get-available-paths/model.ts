import { IUser } from "@/src/app/store/user/user.interface";
import {
  AdminPaths,
  SuperAdminPaths,
  UserPaths
} from "@/src/widgets/layout/lib/available-paths";

export const useGetAvailablePaths = (user: IUser | null) => {
  if (!user) return [];
  if (user.isAdmin === "super_admin") return SuperAdminPaths;
  else if (user.isAdmin === "housekeeper") return UserPaths;
  else return AdminPaths;
};
