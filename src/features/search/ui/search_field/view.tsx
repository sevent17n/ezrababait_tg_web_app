import { ChangeEvent, FC } from "react";

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchField: FC<
  ISearchField & {
    expandedInput?: boolean;
    setExpandedInput?: (arg: boolean) => void;
    setIsSearchListOpened?: (arg: boolean) => void;
  }
> = ({ searchTerm, handleSearch, expandedInput }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"Search workers"}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
