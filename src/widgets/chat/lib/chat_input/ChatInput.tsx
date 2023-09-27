import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ChatService } from '@/shared/api/services/chat.service';
import { IContent } from '@/shared/interfaces/chat.interface';
import { FC } from 'react';

const ChatInput: FC<{ senderId: number; chatId: string }> = ({
  senderId,
  chatId,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (content: IContent) => {
    const date = new Date();
    await ChatService.sendMessage({
      content: {
        text: content.text,
      },
      chatId,
      senderId,
      date,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField type="text" {...register('text')} />
      <Button type={'submit'}>Send</Button>
    </form>
  );
};

export default ChatInput;
