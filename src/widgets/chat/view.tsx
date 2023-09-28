import { FC, useEffect, useState } from "react";
import { useAuth } from "@/src/shared/hooks/use-auth";
import { IChat, IMessage } from "@/src/shared/interfaces/chat.interface";
import { $socket } from "@/src/shared/api/interceptors";
import { useQuery } from "@tanstack/react-query";
import { chatService } from "@/src/shared/api/services/chat";
import { ChatHeader } from "@/src/widgets/chat/lib/chat_header";
import { ChatBody } from "@/src/widgets/chat/lib/chat-body";
import { ChatInput } from "@/src/widgets/chat/lib/chat-input";
import { StyledChatContainer } from "@/src/widgets/chat/styles";

export const Chat: FC<IChat> = ({
  _id,
  image_url,
  name,
  members,
  group_id
}) => {
  const { data, isLoading } = useQuery(
    ["get messages"],
    async () => await chatService.getMessages(_id, 0, 10)
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

    $socket.on("new_message", handleNewMessage);

    return () => {
      $socket.off("new_message", handleNewMessage);
    };
  }, []);

  return (
    <StyledChatContainer>
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
    </StyledChatContainer>
  );
};
