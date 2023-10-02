import { Container } from "@mui/material";
import GroupList from "@/src/widgets/group_list/GroupList";
import { Main } from "@/src/shared/containers/main";

export const ManageGroups = () => {
  return (
    <Main>
      <GroupList />
    </Main>
  );
};
