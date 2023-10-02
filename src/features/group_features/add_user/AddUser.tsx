import { FC, useState } from "react";
import { Button, Dialog } from "@mui/material";
import { useForm } from "react-hook-form";
import { groupService } from "@/src/shared/api/services/group";
import { IUser } from "@/src/app/store/user/user.interface";
import { Search } from "@/src/features/search";

const AddUser: FC<{ group_id: string }> = ({ group_id }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [open, setOpen] = useState(false);
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    if (user) {
      await groupService.addMember(user.username, group_id);
      setUser(null);
    }
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add member</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Search setUser={setUser} type={"user"} />

          {user && (
            <p>Selected User: {user.first_name + " " + user.last_name}</p>
          )}
          <Button
            onClick={() => {
              setOpen(false);
              setUser(null);
            }}
          >
            Cancel
          </Button>
          <Button type={"submit"}>Add</Button>
        </form>
      </Dialog>
    </div>
  );
};

export default AddUser;
