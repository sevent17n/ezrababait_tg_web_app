import { FC } from "react";
import { AvatarContainer } from "@/src/shared/components/avatar-container";
import { IMessage } from "@/src/shared/interfaces/chat.interface";
import { Stack, Typography } from "@mui/material";

const Message: FC<IMessage> = ({ content, date, sender, isOwnMessage }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignSelf: isOwnMessage ? "flex-end" : "flex-start",
        maxWidth: 300,
        margin: "10px 0"
      }}
    >
      <div>
        <Typography>{content.text}</Typography>
        <div>
          <Typography>{date.toString()}</Typography>
        </div>
      </div>
      <AvatarContainer image_url={sender.photo_url} alt={sender.first_name} />
    </Stack>
  );
};

export default Message;
