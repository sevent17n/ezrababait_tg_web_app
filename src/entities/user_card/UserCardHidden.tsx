import { FC } from 'react';
import Image from 'next/image';
import { IPost } from '@/shared/interfaces/post.interface';

const UserCardHidden: FC<{
  post: IPost;
  onCardClick: (payload: IPost) => void;
  active: Omit<IPost, 'first_name' | 'last_name'> | null | undefined;
}> = ({ post, onCardClick, active }) => {
  return (
    <div
      key={post.username}
      className={'w-24 h-36 flex flex-col'}
      onClick={() => onCardClick(post)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: active?.age === post.age ? '#6badf8' : 'white',
      }}
    >
      <Image
        src={post.image_url}
        alt={post.first_name}
        width={100}
        height={100}
        style={{ width: 100, height: 100 }}
      />
      <h1>{post.first_name}</h1>
      <h1>{post.last_name}</h1>
    </div>
  );
};

export default UserCardHidden;
