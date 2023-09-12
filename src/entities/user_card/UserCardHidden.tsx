import { FC } from 'react';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import { IPost } from '@/shared/interfaces/post.interface';

const UserCardHidden: FC<{
  post: IPost;
  onCardClick: (payload: IPost) => void;
}> = ({ post, onCardClick }) => {
  return (
    <div
      key={post.username}
      className={'w-24 h-36 flex flex-col'}
      onClick={() => onCardClick(post)}
    >
      <Image
        src={post.image_url}
        alt={post.first_name}
        width={90}
        height={90}
      />
      <h1>{post.first_name}</h1>
      <br />
      <h1>{post.last_name}</h1>
    </div>
  );
};

export default UserCardHidden;
