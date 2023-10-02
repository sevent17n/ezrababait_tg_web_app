import { FC } from "react";
import { AvatarContainer } from "@/src/shared/components/avatar-container";
import { IMessage } from "@/src/shared/interfaces/chat.interface";
import { Box, Stack, Typography } from "@mui/material";
import {
  StyledMessage,
  StyledMessageContent
} from "@/src/entities/message/styles";

export const Message: FC<IMessage> = ({
  content,
  date,
  sender,
  isOwnMessage
}) => {
  const prettyDate = date.toString().split("T");

  return (
    <StyledMessage
      direction={"row"}
      sx={{
        alignSelf: isOwnMessage ? "flex-end" : "flex-start"
      }}
    >
      <StyledMessageContent>
        <Typography>{content.text}</Typography>
        <div>
          <Typography>
            {prettyDate[0].slice(5) + " " + prettyDate[1].slice(0, 5)}
          </Typography>
        </div>
      </StyledMessageContent>

      <AvatarContainer
        image_url={
          //@ts-ignore
          sender.photo_url
        }
        alt={sender.first_name}
      />
    </StyledMessage>
  );
};
