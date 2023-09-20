import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { SuperAdminService } from '@/shared/services/super_admin.service';

const AddAdmin = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, setValue } = useForm<IAddAdmin>();

  const onSubmit = async (data: IAddAdmin) => {
    await SuperAdminService.addAdmin(data);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Add Admin</Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new Admin</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new admin username and set up role
            </DialogContentText>
            <div className={'flex'}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="@username"
                type="text"
                variant="standard"
                {...register('username')}
              />
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
