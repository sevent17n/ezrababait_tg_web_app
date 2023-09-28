"use client";

import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import { superAdminService } from "@/src/shared/api/services/super-admin";
import AddAdmin from "@/src/features/add_admin/AddAdmin";
const Page = () => {
  const { data, isLoading } = useQuery(
    ["getAdmins"],
    async () => await superAdminService.getAdmins()
  );

  return (
    <div>
      <AddAdmin />
      <div
        style={{
          display: "flex",
          gap: 15,
          flexWrap: "wrap",
          width: 500,
          padding: "0 10px"
        }}
      >
        {!isLoading &&
          data &&
          data.map((admin, index) => (
            <div key={index} style={{ width: 140 }}>
              <Image
                src={admin.photo_url}
                alt={admin.first_name}
                width={140}
                height={140}
              />
              <p>{admin.first_name + " " + admin.last_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
