import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { IContent } from "@/src/shared/interfaces/chat.interface";
import { chatService } from "@/src/shared/api/services/chat";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField type="text" {...register("text")} />
      <Button type={"submit"}>Send</Button>
    </form>
  );
};
