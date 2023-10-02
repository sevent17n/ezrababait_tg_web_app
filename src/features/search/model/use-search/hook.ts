import { ChangeEvent, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/src/features/search/model";
import { adminService } from "@/src/shared/api/services/admin";
import { groupService } from "@/src/shared/api/services/group";

export const useSearch = (type: "user" | "group" | "both") => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data } = useQuery(
    ["search users", debouncedSearch],
    async () => {
      if (type === "both") {
        const groups = await groupService.findByName(debouncedSearch);
        const users = await adminService.getUsersByQuery(debouncedSearch);
        return { groups, users };
      } else if (type === "user") {
        const users = await adminService.getUsersByQuery(debouncedSearch);
        return { users };
      } else {
        const groups = await groupService.findByName(debouncedSearch);
        return { groups };
      }
    },
    {
      enabled: !!debouncedSearch
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchTerm };
};
