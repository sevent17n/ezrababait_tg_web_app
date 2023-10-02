import { Dispatch, FC, SetStateAction, useState } from "react";
import { useSearch } from "@/src/features/search/model";
import { SearchField } from "@/src/features/search/ui/search-field";
import { SearchList } from "@/src/features/search/ui/search-list";
import { IUser } from "@/src/app/store/user/user.interface";

interface ISearch {
  className?: string;
  setUser?: Dispatch<SetStateAction<IUser | null>>;
  type: "user" | "group" | "both";
}
export const Search: FC<ISearch> = ({ className, setUser, type }) => {
  const [isSearchListOpened, setIsSearchListOpened] = useState(true);
  const { isSuccess, data, handleSearch, searchTerm } = useSearch(type);

  return (
    <div>
      <SearchField
        setIsSearchListOpened={() => setIsSearchListOpened(true)}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      {isSuccess && isSearchListOpened && (
        //@ts-ignore
        <SearchList results={data} setUser={setUser} />
      )}
    </div>
  );
};
