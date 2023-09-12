import { FC, useCallback, useState } from 'react';
import { IPost } from '@/shared/interfaces/post.interface';
import UserCardHidden from '@/entities/user_card/UserCardHidden';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import ExpandedUserCard from '@/entities/user_card/ExpandedUserCard';

const StyledUserRow = styled.div`
  display: flex;
  max-width: 450px;
  margin: 0;
`;
const UserRow: FC<{ posts: Array<IPost> }> = ({ posts }) => {
  const [info, setInfo] = useState<Omit<
    IPost,
    'first_name' | 'last_name'
  > | null>();
  const onCardClick = useCallback(
    (payload: IPost) => {
      if (info === payload) {
        setInfo(null);
      } else {
        setInfo(payload);
      }
    },
    [info]
  );
  return (
    <div>
      <StyledUserRow>
        {posts.map((post) => (
          <UserCardHidden
            key={Math.random()}
            post={post}
            onCardClick={onCardClick}
          />
        ))}
      </StyledUserRow>
      {info && (
        <ExpandedUserCard
          age={info.age}
          email={info.email}
          phone={info.phone}
          sex={info.sex}
          address={info.address}
          username={info.username}
          coordinates={info.coordinates}
        />
      )}
    </div>
  );
};

export default UserRow;
