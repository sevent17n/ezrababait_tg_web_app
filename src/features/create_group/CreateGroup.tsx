'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GroupService } from '@/shared/api/services/group.service';
import UploadField from '@/entities/upload_field/UploadField';

const CreateGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<{ name: string; group_image_url: string }>({
    mode: 'onChange',
  });

  const onSubmit = async (data: { name: string; group_image_url: string }) => {
    await GroupService.createGroup(data.name, data.group_image_url);
    setIsOpen(false);
  };
  return (
    <div>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          style={{ position: 'fixed', right: 20, bottom: 20 }}
        >
          Create group
        </Button>
      )}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ position: 'relative' }}
        >
          <DialogTitle>Create new Group</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new group name and select a picture
            </DialogContentText>

            <Controller
              control={control}
              name={'group_image_url'}
              defaultValue={''}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <UploadField
                  onChange={onChange}
                  placeholder={'Group Picture'}
                  error={error}
                  value={value}
                  folder={'groups'}
                />
              )}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="@username"
              type="text"
              variant="standard"
              {...register('name')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type={'submit'}>Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
