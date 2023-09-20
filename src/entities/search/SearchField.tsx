import cn from 'clsx';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import styles from './Search.module.scss';
import { useOutsideClick } from '@/shared/lib/hooks/useClickOutside';
import { useSearch } from '@/entities/search/UseSearch';
import SearchList from '@/entities/search/ui/search_list/SearchList';
import SearchField from '@/entities/search/ui/search_field/SearchField';
import { IUserState } from '@/store/user/user.interface';

const Search: FC<{
  className?: string;
  setUser?: Dispatch<SetStateAction<IUserState | null>>;
}> = ({ className, setUser }) => {
  const [isSearchListOpened, setIsSearchListOpened] = useState(true);
  const ref = useOutsideClick(() => setIsSearchListOpened(false));
  const { isSuccess, data, handleSearch, searchTerm } = useSearch();

  return (
    <div className={cn(styles.wrapper, className)} ref={ref}>
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

export default Search;
