import { useQuery } from "@tanstack/react-query";
import { Chat } from "@/src/widgets/chat";
import { useGetSearchParams } from "@/src/shared/hooks/use-get-search-params";
import { groupService } from "@/src/shared/api/services/group";
import { chatService } from "@/src/shared/api/services/chat";

export const Group = () => {
  const id = useGetSearchParams("_id");
  const { data: group, isLoading: isGroupLoading } = useQuery(
    ["get group by id"],
    async () => await groupService.getById(id.toString())
  );
  const { data: chat, isLoading: isChatLoading } = useQuery(
    ["get chat"],
    async () => {
      if (!isGroupLoading && group) {
        return await chatService.getChat(group._id);
      }
    },
    {
      enabled: !!group && !isGroupLoading
    }
  );

  return (
    !isGroupLoading &&
    group &&
    chat &&
    !isChatLoading && (
      <Chat
        _id={chat._id}
        messages={chat.messages}
        image_url={group.image_url}
        name={group.name}
        members={group.members}
        group_id={group._id}
      />
    )
  );
};
