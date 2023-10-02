import { Dispatch, FC, SetStateAction } from "react";
import { IUser } from "@/src/app/store/user/user.interface";
import { IGroup } from "@/src/shared/interfaces/group.interface";
import Link from "next/link";
import { SearchResult } from "@/src/features/search/ui/search-result/view";

export const SearchList: FC<{
  results:
    | {
        users: Array<{ item: IUser }> | undefined;
        groups: Array<IGroup> | undefined;
      }
    | undefined;
  setUser?: Dispatch<SetStateAction<IUser | null>>;
}> = ({ results, setUser }) => {
  if (!results) return <div>Loading</div>;
  const { users, groups } = results;

  return (
    <div>
      {((users && users.length !== 0) || (groups && groups.length)) !== 0 ? (
        <div>
          {users && users.length !== 0 && (
            <div>
              Users:
              {users &&
                users.map((user) =>
                  setUser ? (
                    <SearchResult
                      key={user.item.id}
                      image_url={user.item.image_url}
                      title={user.item.first_name + " " + user.item.last_name}
                    />
                  ) : (
                    <Link href={`/user/${user.item.id}`} key={user.item.id}>
                      <SearchResult
                        image_url={user.item.image_url}
                        title={user.item.first_name + " " + user.item.last_name}
                      />
                    </Link>
                  )
                )}
            </div>
          )}
          {groups && groups.length !== 0 && (
            <div>
              Groups:
              {groups.map((group) => (
                <Link href={`/tabs/manage-groups/${group._id}`} key={group._id}>
                  <SearchResult
                    image_url={group.image_url}
                    title={group.name}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>No matches</div>
      )}
    </div>
  );
};
