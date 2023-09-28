import { ChangeEvent, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/src/features/search/model";
import { adminService } from "@/src/shared/api/services/admin";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data } = useQuery(
    ["search users", debouncedSearch],
    () => adminService.getUsersByQuery(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchTerm };
};
