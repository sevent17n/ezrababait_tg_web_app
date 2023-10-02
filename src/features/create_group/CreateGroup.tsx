"use client";

import { useAuth } from "@/src/shared/hooks/use-auth";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField
} from "@mui/material";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { groupService } from "@/src/shared/api/services/group";
import { chatService } from "@/src/shared/api/services/chat";
import UploadField from "@/src/entities/upload_field/UploadField";
import { Search } from "@/src/features/search";
import { IGroup } from "@/src/shared/interfaces/group.interface";

const CreateGroup: FC<{ idArray: Array<number> }> = ({ idArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExistingOpen, setIsExistingOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<{ name: string; group_image_url: string }>({
    mode: "onChange"
  });
  const [group, setGroup] = useState<IGroup>();
  const { user } = useAuth();
  const onSubmit = async (data: { name: string; group_image_url: string }) => {
    if (user) {
      if (isOpen) {
        const group = await groupService.createGroup(
          data.name,
          data.group_image_url,
          idArray
        );
        await chatService.createChat(idArray, user.id, group._id);
      } else {
        // await groupService.addMember();
      }
    }
    setIsOpen(false);
  };
  return (
    <div>
      <Stack direction={"row"} spacing={3} sx={{ padding: 5 }}>
        <Button onClick={() => setIsOpen(true)}>Create group</Button>
        <Button onClick={() => setIsExistingOpen(true)}>
          Add to existing group
        </Button>
      </Stack>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ position: "relative" }}
        >
          <DialogTitle>Create new Group</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new group name and select a picture
            </DialogContentText>

            <Controller
              control={control}
              name={"group_image_url"}
              defaultValue={""}
              render={({
                field: { value, onChange },
                fieldState: { error }
              }) => (
                <UploadField
                  onChange={onChange}
                  placeholder={"Group Picture"}
                  error={error}
                  value={value}
                  folder={"groups"}
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
              {...register("name")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type={"submit"}>Create</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog open={isExistingOpen} onClose={() => setIsExistingOpen(false)}>
        <DialogContent>
          <Search
            type={"group"}
            //@ts-ignore
            setUser={setGroup}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
