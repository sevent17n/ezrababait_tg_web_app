import { useAuth } from '@/shared/lib/hooks/useAuth';
import Message from '@/entities/message/Message';
import { FC } from 'react';
import { IChatBody } from '@/shared/interfaces/chat.interface';

const ChatBody: FC<IChatBody> = ({ messages }) => {
  const { user } = useAuth();

  return (
    user && (
      <div>
        {messages.length !== 0 &&
          messages.map((message, index) => (
            <Message
              read={message.read}
              key={message._id}
              isOwnMessage={user === message.sender}
              chatId={message.chatId}
              date={message.date}
              content={message.content}
              _id={message._id}
              sender={message.sender}
            />
          ))}
      </div>
    )
  );
};

export default ChatBody;
