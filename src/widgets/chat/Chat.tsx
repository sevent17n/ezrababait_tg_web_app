import ChatHeader from '@/widgets/chat/lib/chat_header/ChatHeader';
import ChatInput from '@/widgets/chat/lib/chat_input/ChatInput';
import { FC, useEffect, useState } from 'react';
import { IChat, IMessage } from '@/shared/interfaces/chat.interface';
import ChatBody from '@/widgets/chat/lib/chat_body/ChatBody';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { ChatService } from '@/shared/api/services/chat.service';
import { socket } from '@/shared/api/interceptors/socketAuth.interceptor';

const Chat: FC<IChat> = ({ _id, image_url, name, members, group_id }) => {
  const { data, isLoading } = useQuery(
    ['get messages'],
    async () => await ChatService.getMessages(_id, 0, 10)
  );

  const [typing, setTyping] = useState(null);
  const { user } = useAuth();
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    if (data) {
      setMessages((prevMessages) => [...prevMessages, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const handleNewMessage = (newMessage: IMessage) => {
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    };

    socket.on('new_message', handleNewMessage);

    return () => {
      socket.off('new_message', handleNewMessage);
    };
  }, []);

  console.log(messages);

  return (
    <div>
      <ChatHeader
        image_url={image_url}
        name={name}
        members={members}
        typing={typing}
        group_id={group_id}
      />
      {!isLoading && messages.length !== 0 && (
        <ChatBody messages={messages.reverse()} />
      )}

      <ChatInput chatId={_id} senderId={user?.id || 0} />
    </div>
  );
};

export default Chat;
