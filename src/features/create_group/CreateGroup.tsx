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
import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GroupService } from '@/shared/api/services/group.service';
import UploadField from '@/entities/upload_field/UploadField';
import { ChatService } from '@/shared/api/services/chat.service';
import { useAuth } from '@/shared/lib/hooks/useAuth';

const CreateGroup: FC<{ idArray: Array<number> }> = ({ idArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<{ name: string; group_image_url: string }>({
    mode: 'onChange',
  });
  const { user } = useAuth();
  const onSubmit = async (data: { name: string; group_image_url: string }) => {
    if (user) {
      const group = await GroupService.createGroup(
        data.name,
        data.group_image_url,
        idArray
      );
      await ChatService.createChat(idArray, user.id, group._id);
    }
    setIsOpen(false);
  };
  return (
    <div>
      {!isOpen && <Button onClick={() => setIsOpen(true)}>Create group</Button>}
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
