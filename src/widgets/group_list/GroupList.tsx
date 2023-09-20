'use client';

import { useQuery } from '@tanstack/react-query';
import { GroupService } from '@/shared/api/services/group.service';
import { useState } from 'react';
import GroupCard from '@/entities/group_card/GroupCard';

const GroupList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ['getGroupList'],
    async () => await GroupService.getGroupList(page, 15)
  );
  console.log(data);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 400,
        gap: 20,
        padding: '0 20px',
      }}
    >
      {!isLoading &&
        data &&
        data.map((group) => (
          <GroupCard
            key={group._id}
            admin={group.admin}
            name={group.name}
            members={group.members}
            _id={group._id}
            image_url={group.image_url}
          />
        ))}
    </div>
  );
};

export default GroupList;
