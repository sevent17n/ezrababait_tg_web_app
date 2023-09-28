import { IPath } from "@/src/widgets/layout/interface";

export const UserPaths: Array<IPath> = [
  {
    link: "/",
    label: "home"
  }
];

export const AdminPaths: Array<IPath> = [
  {
    link: "/manage_groups",
    label: "Groups"
  },
  {
    link: "/",
    label: "Workers"
  },
  {
    link: "/admins",
    label: "Admins"
  }
];

export const SuperAdminPaths: Array<IPath> = [
  {
    link: "/manage_groups",
    label: "Groups"
  },
  {
    link: "/",
    label: "Workers"
  },
  {
    link: "/admins",
    label: "Admins"
  }
];
