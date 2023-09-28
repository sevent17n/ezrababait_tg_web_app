import { Dispatch, FC, SetStateAction } from "react";
import { IUserState } from "@/src/app/store/user/user.interface";

export const SearchList: FC<{
  users: Array<{ item: IUserState }> | undefined;
  setUser?: Dispatch<SetStateAction<IUserState | null>>;
}> = ({ users, setUser }) => {
  return (
    <div>
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
