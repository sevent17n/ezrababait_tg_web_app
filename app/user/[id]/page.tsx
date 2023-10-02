"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useGetSearchParams } from "@/src/shared/hooks/use-get-search-params";
import { adminService } from "@/src/shared/api/services/admin";

const Page = () => {
  const id = useGetSearchParams("id");
  const { data: user, isLoading } = useQuery(
    ["get user by id"],
    async () => await adminService.getUserById(parseInt(id.toString()))
  );

  return (
    !isLoading &&
    user && (
      <div>
        <Image
          //@ts-ignore
          src={user.photo_url}
          alt={user.first_name}
          width={150}
          height={150}
        />
      </div>
    )
  );
};

export default Page;
