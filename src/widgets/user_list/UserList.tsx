import { useQuery } from '@tanstack/react-query';
import { UserService } from '@/shared/api/services/user.service';
import UserRow from '@/widgets/user_list/ui/UserRow';
import { useMemo } from 'react';

const UserList = () => {
  const { data: posts, isLoading } = useQuery(['get posts'], async () => {
    const { data } = await UserService.getUserList();
    return data;
  });

  const postsMatrix = useMemo(() => {
    if (!posts) return [];
    const matrix = [];
    let postsStack = [];

    for (let i = 0; i < posts.length; i++) {
      postsStack.push(posts[i]);

      if (postsStack.length === 3 || i === posts.length - 1) {
        matrix.push([...postsStack]);
        postsStack = [];
      }
    }

    return matrix;
  }, [posts]);

  return (
    <div className={'flex-col justify-center items-center w-full'}>
      {postsMatrix.map((postsSet) => (
        <UserRow posts={postsSet} key={Math.random()} />
      ))}
    </div>
  );
};

export default UserList;
