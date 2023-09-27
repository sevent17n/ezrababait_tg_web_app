import React from 'react';
import Chat from '@/widgets/chat/Chat';
import { useSearchParamsHelper } from '@/shared/helpers/search_params.helper';
import { useQuery } from '@tanstack/react-query';
import { GroupService } from '@/shared/api/services/group.service';
import { ChatService } from '@/shared/api/services/chat.service';

const GroupPage = () => {
  const id = useSearchParamsHelper('_id');
  const { data: group, isLoading: isGroupLoading } = useQuery(
    ['get group by id'],
    async () => await GroupService.getById(id.toString())
  );
  const { data: chat, isLoading: isChatLoading } = useQuery(
    ['get chat'],
    async () => {
      if (!isGroupLoading && group) {
        return await ChatService.getChat(group._id);
      }
    },
    {
      enabled: !!group && !isGroupLoading,
    }
  );

  return (
    !isGroupLoading &&
    group &&
    chat &&
    !isChatLoading && (
      <div className={'relative px-5'}>
        <Chat
          _id={chat._id}
          messages={chat.messages}
          image_url={group.image_url}
          name={group.name}
          members={group.members}
          group_id={group._id}
        />
      </div>
    )
  );
};

export default GroupPage;
