import { ChangeEvent, FC } from 'react';

import styles from './SearchField.module.scss';

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchField: FC<
  ISearchField & {
    expandedInput?: boolean;
    setExpandedInput?: (arg: boolean) => void;
    setIsSearchListOpened?: (arg: boolean) => void;
  }
> = ({ searchTerm, handleSearch, expandedInput }) => {
  return (
    <div className={styles.search}>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder={'Search workers'}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchField;
