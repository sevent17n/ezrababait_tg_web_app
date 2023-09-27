import { FC, useCallback, useState } from 'react';
import { IPost } from '@/shared/interfaces/post.interface';
import UserCard from '@/entities/user_card/UserCard';
import styled from '@emotion/styled';

const StyledUserRow = styled.div`
  display: flex;
  max-width: 900px;
  gap: 20px;
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
    <div style={{ marginTop: 30 }}>
      <StyledUserRow>
        {posts.map((post) => (
          <UserCard key={Math.random()} post={post} />
        ))}
      </StyledUserRow>
    </div>
  );
};

export default UserRow;
