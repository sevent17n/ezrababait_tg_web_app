import CreateGroup from '@/features/create_group/CreateGroup';
import GroupList from '@/widgets/group_list/GroupList';

const ManageGroups = () => {
  return (
    <div>
      <CreateGroup />
      <GroupList />
    </div>
  );
};

export default ManageGroups;
