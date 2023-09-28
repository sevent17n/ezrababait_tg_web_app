import { Paths } from "@/src/widgets/layout/model/paths";
import { FC } from "react";
import { IPathList } from "@/src/widgets/layout/interface";

export const CommonUserLayout: FC<IPathList> = ({ paths }) => {
  return (
    <nav>
      <Paths paths={paths} />
    </nav>
  );
};
