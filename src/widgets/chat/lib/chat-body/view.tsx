import { FC } from "react";
import Message from "@/src/entities/message/Message";
import { useAuth } from "@/src/shared/hooks/use-auth";
import { IChatBody } from "@/src/shared/interfaces/chat.interface";
import { StyledChatBody } from "@/src/widgets/chat/lib/chat-body/styles";

export const ChatBody: FC<IChatBody> = ({ messages }) => {
  const { user } = useAuth();

  return (
    user && (
      <StyledChatBody>
        {messages.length !== 0 &&
          messages
            .toReversed()
            .map((message, index) => (
              <Message
                read={message.read}
                key={message._id}
                isOwnMessage={user.id === message.sender.id}
                chatId={message.chatId}
                date={message.date}
                content={message.content}
                _id={message._id}
                sender={message.sender}
              />
            ))}
      </StyledChatBody>
    )
  );
};
