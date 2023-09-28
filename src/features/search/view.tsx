import clsx from "clsx";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { IUserState } from "@/src/app/store/user/user.interface";
import { useSearch } from "@/src/features/search/model";
import { SearchField } from "@/src/features/search/ui/search_field";
import { SearchList } from "@/src/features/search/ui/search_list";

interface ISearch {
  className?: string;
  setUser?: Dispatch<SetStateAction<IUserState | null>>;
}
export const Search: FC<ISearch> = ({ className, setUser }) => {
  const [isSearchListOpened, setIsSearchListOpened] = useState(true);
  const { isSuccess, data, handleSearch, searchTerm } = useSearch();

  return (
    <div>
      <SearchField
        setIsSearchListOpened={() => setIsSearchListOpened(true)}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      {isSuccess && isSearchListOpened && (
        <SearchList users={data || []} setUser={setUser} />
      )}
    </div>
  );
};
