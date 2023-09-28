import { useQuery } from "@tanstack/react-query";
import { userService } from "@/src/shared/api/services/user";
import { useEffect, useState } from "react";
import { ICard } from "@/src/entities/card/view";
import SelectedCardsBar from "@/src/entities/selected_users_bar/SelectedUsersBar";
import CardsLayout from "@/src/widgets/cards_layout/CardsLayout";

const UserList = () => {
  const { data: posts, isLoading } = useQuery(
    ["get posts"],
    async () => await userService.getUserList()
  );
  const [cards, setCards] = useState<Array<ICard>>();
  useEffect(() => {
    !isLoading &&
      posts &&
      setCards(
        posts.map((post) => ({
          id: post.id,
          title: `${post.first_name} ${post.last_name}`,
          image_url: post.image_url,
          link: `/user/${post.id}`
        }))
      );
  }, [posts, isLoading]);
  const [selectedCards, setSelectedCards] = useState<Array<ICard>>([]);

  return (
    !isLoading &&
    cards && (
      <div className={"px-2"}>
        <SelectedCardsBar cards={selectedCards} />
        <CardsLayout cards={cards} onClick={setSelectedCards} />
      </div>
    )
  );
};

export default UserList;
