import { Button, Dialog } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { IUser } from "@/src/app/store/user/user.interface";
import { Dispatch, FC, SetStateAction } from "react";
import { AvatarContainer } from "@/src/shared/components/avatar-container";
import UserCard from "@/src/entities/user_card/UserCard";

export interface IChatMenu {
  admins: IUser[];
  members: IUser[];
  image_url: string;
  name: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const ChatMenu: FC<IChatMenu> = ({
  image_url,
  name,
  admins,
  members,
  open,
  setOpen
}) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div>
        <AvatarContainer image_url={image_url} alt={name} />
        <h1>{name}</h1>
        <Button onClick={() => setOpen(false)}>
          <AiOutlineClose />
        </Button>
      </div>
      <div>
        <h1>Admins: </h1>
        <div>
          {admins?.length !== 0 ? (
            admins.map((admin, index) => <UserCard key={index} user={admin} />)
          ) : (
            <p>No admins added yet(</p>
          )}
        </div>
      </div>
      <div>
        <h1>Members: </h1>
        <div>
          {members?.length !== 0 ? (
            members.map((member, index) => (
              <UserCard key={index} user={member} />
            ))
          ) : (
            <p>No members added yet(</p>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ChatMenu;
