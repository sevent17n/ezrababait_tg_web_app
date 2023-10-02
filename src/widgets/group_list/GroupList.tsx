"use client";

import { useQuery } from "@tanstack/react-query";
import { groupService } from "@/src/shared/api/services/group";
import { useEffect, useState } from "react";
import CardsLayout from "@/src/widgets/cards_layout/CardsLayout";
import { Main } from "@/src/shared/containers/main";
import { ICard } from "@/src/entities/card/view";

const GroupList = () => {
  const [page, setPage] = useState(1);
  const { data: groups, isLoading } = useQuery(
    ["getGroupList"],
    async () => await groupService.getGroupList(page, 15)
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
          link: `/chat/${group._id}`,
          selectable: true
        }))
      );
  }, [groups, isLoading]);
  return !isLoading && cards && <CardsLayout cards={cards} />;
};

export default GroupList;
