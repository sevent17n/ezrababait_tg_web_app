import { FC, useState } from 'react';
import { IUserState } from '@/store/user/user.interface';
import { useForm } from 'react-hook-form';
import { GroupService } from '@/shared/api/services/group.service';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Search from '@/entities/search/SearchField';
import Select from 'react-select';

const AddAdmin: FC<{ group_id: string }> = ({ group_id }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<IUserState | null>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUser(null);
  };

  const { handleSubmit, setValue } = useForm();

  const onSubmit = async () => {
    if (user) {
      await GroupService.addAdmin(user.username, group_id);
      handleClose();
    }
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Add Admin</Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new Admin</DialogTitle>
          <DialogContent>
            <div className={'flex'}>
              <Search setUser={setUser} />

              {user && (
                <p>Selected User: {user.first_name + ' ' + user.last_name}</p>
              )}
              <Select
                options={[
                  { value: 'super_admin', label: 'Super Admin' },
                  { value: 'admin', label: 'Admin' },
                  { value: 'housekeeper', label: 'Housekeeper' },
                ]}
                onChange={(selectedOption) => {
                  selectedOption && setValue('role', selectedOption.value);
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type={'submit'}>Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddAdmin;
