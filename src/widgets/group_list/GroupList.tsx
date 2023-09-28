"use client";

import { useQuery } from "@tanstack/react-query";
import { groupService } from "@/src/shared/api/services/group";
import { useEffect, useState } from "react";
import { ICard } from "@/src/entities/card/Card";
import CardsLayout from "@/src/widgets/cards_layout/CardsLayout";

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
          link: `/manage_groups/${group._id}`,
          selectable: true
        }))
      );
  }, [groups, isLoading]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 460,
        gap: 35,
        padding: "0 20px"
      }}
    >
      {!isLoading && cards && <CardsLayout cards={cards} />}
    </div>
  );
};

export default GroupList;
