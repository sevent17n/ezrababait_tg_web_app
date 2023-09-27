'use client';

import { useQuery } from '@tanstack/react-query';
import { GroupService } from '@/shared/api/services/group.service';
import { useEffect, useState } from 'react';
import GroupCard from '@/entities/group_card/GroupCard';
import { ICard } from '@/entities/card/Card';
import CardsLayout from '@/widgets/cards_layout/CardsLayout';

const GroupList = () => {
  const [page, setPage] = useState(1);
  const { data: groups, isLoading } = useQuery(
    ['getGroupList'],
    async () => await GroupService.getGroupList(page, 15)
  );
  const [cards, setCards] = useState<Array<ICard>>();
  useEffect(() => {
    !isLoading &&
      groups &&
      setCards(
        groups.map((group) => ({
          id: group._id,
          title: `${group.name}`,
          image_url: group.image_url,
          subtitle: group.admin
            ? `${group?.admin?.first_name} ${group?.admin?.last_name}`
            : undefined,
          link: `/manage_groups/${group._id}`,
          selectable: true,
        }))
      );
  }, [groups, isLoading]);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 460,
        gap: 35,
        padding: '0 20px',
      }}
    >
      {!isLoading && cards && <CardsLayout cards={cards} />}
    </div>
  );
};

export default GroupList;
