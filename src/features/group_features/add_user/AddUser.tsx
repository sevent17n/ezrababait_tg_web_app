import { FC, useState } from 'react';
import { Button, Dialog } from '@mui/material';
import Search from '@/entities/search/SearchField';
import { useForm } from 'react-hook-form';
import { IUserState } from '@/store/user/user.interface';
import { GroupService } from '@/shared/api/services/group.service';

const AddUser: FC<{ group_id: string }> = ({ group_id }) => {
  const [user, setUser] = useState<IUserState | null>(null);
  const [open, setOpen] = useState(false);
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    if (user) {
      await GroupService.addMember(user.username, group_id);
      setUser(null);
    }
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add member</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Search setUser={setUser} />

          {user && (
            <p>Selected User: {user.first_name + ' ' + user.last_name}</p>
          )}
          <Button
            onClick={() => {
              setOpen(false);
              setUser(null);
            }}
          >
            Cancel
          </Button>
          <Button type={'submit'}>Add</Button>
        </form>
      </Dialog>
    </div>
  );
};

export default AddUser;
