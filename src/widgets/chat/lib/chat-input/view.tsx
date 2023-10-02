import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { IContent } from "@/src/shared/interfaces/chat.interface";
import { chatService } from "@/src/shared/api/services/chat";
import {
  StyledChatInput,
  StyledTextField
} from "@/src/widgets/chat/lib/chat-input/styles";

export const ChatInput: FC<{ senderId: number; chatId: string }> = ({
  senderId,
  chatId
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (content: IContent) => {
    const date = new Date();
    await chatService.sendMessage({
      content: {
        text: content.text
      },
      chatId,
      senderId,
      date
    });
  };

  return (
    <StyledChatInput onSubmit={handleSubmit(onSubmit)}>
      <StyledTextField
        type="text"
        {...register("text")}
        placeholder={"Enter a message"}
      />
      <Button type={"submit"}>Send</Button>
    </StyledChatInput>
  );
};
