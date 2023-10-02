import { IUser } from "@/src/app/store/user/user.interface";
import { FC, useState } from "react";
import { BackButton } from "@/src/shared/components/back_button";
import { MenuChatButton } from "@/src/widgets/chat/lib/chat_header/lib/MenuChatButton";
import ChatMenu from "@/src/widgets/chat/lib/chat_header/lib/ChatMenu/ChatMenu";
import {
  StyledASide,
  StyledChatHeader,
  StyledChatInfo
} from "@/src/widgets/chat/lib/chat_header/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
    (member) => member.isAdmin !== "housekeeper"
  );
  console.log(members);
  return (
    <StyledChatHeader>
      <StyledASide>
        <BackButton />
        <StyledChatInfo onClick={() => setOpen(true)}>
          <Image alt={name} src={image_url} width={45} height={45} />
          <Box>
            <Typography variant={"h3"}>{name}</Typography>
            {typing ? (
              typing.map((user, index) => (
                <Typography key={index}>
                  {user.first_name} is typing
                  {index === typing.length ? "" : ","}
                </Typography>
              ))
            ) : (
              <Typography>{members.length} members</Typography>
            )}
          </Box>
        </StyledChatInfo>
      </StyledASide>
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
