import { FC } from "react";
import { IPathList } from "@/src/widgets/layout/interface";
import { Paths } from "@/src/widgets/layout/model/paths";

export const SuperAdminLayout: FC<IPathList> = ({ paths }) => {
  return (
    <nav>
      <Paths paths={paths} />
    </nav>
  );
};
