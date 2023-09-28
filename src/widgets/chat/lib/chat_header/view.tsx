import { IUser } from "@/src/app/store/user/user.interface";
import { FC, useState } from "react";
import BackButton from "@/src/shared/components/back_button/back_button";
import { AvatarContainer } from "@/src/shared/components/avatar-container";
import MenuChatButton from "@/src/widgets/chat/lib/chat_header/lib/MenuChatButton/MenuChatButton";
import ChatMenu from "@/src/widgets/chat/lib/chat_header/lib/ChatMenu/ChatMenu";
import { StyledChatHeader } from "@/src/widgets/chat/lib/chat_header/styles";

export interface IChatLayout {
  image_url: string;
  name: string;
  members: Array<IUser>;
  typing: IUser[] | null;
  group_id: string;
}
export const ChatHeader: FC<IChatLayout> = ({
  image_url,
  typing,
  members,
  name,
  group_id
}) => {
  const [open, setOpen] = useState(false);
  const admins = members.filter(
    (member) => member.isAdmin === "admin" || member.isAdmin === "super_admin"
  );
  const common_members = members.filter(
    (member) => member.isAdmin === "housekeeper"
  );

  return (
    <StyledChatHeader>
      <BackButton />
      <button onClick={() => setOpen(true)}>
        <AvatarContainer alt={name} image_url={image_url} />
        <h1>{name}</h1>
        {typing ? (
          typing.map((user, index) => (
            <p key={index}>
              {user.first_name} is typing{index === typing.length ? "" : ","}
            </p>
          ))
        ) : (
          <p>{members.length}</p>
        )}
      </button>
      <MenuChatButton group_id={group_id} />
      <ChatMenu
        admins={admins}
        members={common_members}
        image_url={image_url}
        name={name}
        open={open}
        setOpen={setOpen}
      />
    </StyledChatHeader>
  );
};
