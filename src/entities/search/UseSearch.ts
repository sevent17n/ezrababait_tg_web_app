import { ChangeEvent, useState } from 'react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { AdminService } from '@/shared/api/services/admin.service';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data } = useQuery(
    ['search users', debouncedSearch],
    () => AdminService.getUsersByQuery(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchTerm };
};
