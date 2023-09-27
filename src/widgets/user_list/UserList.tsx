import { useQuery } from '@tanstack/react-query';
import { UserService } from '@/shared/api/services/user.service';
import { useEffect, useMemo, useState } from 'react';
import CardsLayout from '@/widgets/cards_layout/CardsLayout';
import { ICard } from '@/entities/card/Card';
import SelectedCardsBar from '@/entities/selected_users_bar/SelectedUsersBar';

const UserList = () => {
  const { data: posts, isLoading } = useQuery(
    ['get posts'],
    async () => await UserService.getUserList()
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
          link: `/user/${post.id}`,
        }))
      );
  }, [posts, isLoading]);
  const [selectedCards, setSelectedCards] = useState<Array<ICard>>([]);

  return (
    !isLoading &&
    cards && (
      <div className={'px-2'}>
        <SelectedCardsBar cards={selectedCards} />
        <CardsLayout cards={cards} onClick={setSelectedCards} />
      </div>
    )
  );
};

export default UserList;
