import Link from 'next/link';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import styles from './SearchList.module.scss';
import { IUserState } from '@/store/user/user.interface';

const SearchList: FC<{
  users: Array<{ item: IUserState }> | undefined;
  setUser?: Dispatch<SetStateAction<IUserState | null>>;
}> = ({ users, setUser }) => {
  return (
    <div className={styles.list}>
      {users &&
        users.map((user: { item: IUserState }, index: number) => (
          <div
            key={index}
            onClick={() => {
              setUser && setUser(user.item);
            }}
          >
            {user.item.first_name}
          </div>
        ))}
    </div>
  );
};

export default SearchList;
