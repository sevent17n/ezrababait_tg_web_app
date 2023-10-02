"use client";

import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import { superAdminService } from "@/src/shared/api/services/super-admin";
import AddAdmin from "@/src/features/add_admin/AddAdmin";
import CardsLayout from "@/src/widgets/cards_layout/CardsLayout";
import { Main } from "@/src/shared/containers/main";
const Page = () => {
  const { data, isLoading } = useQuery(
    ["getAdmins"],
    async () => await superAdminService.getAdmins()
  );
  if (isLoading && !data) return null;
  const cards = data?.map((admin) => ({
    id: admin.id, // @ts-ignore
    image_url: admin.photo_url,
    title: admin.first_name + " " + admin.last_name,
    link: ``
  }));
  return (
    cards && (
      <Main>
        <AddAdmin />
        <CardsLayout cards={cards}></CardsLayout>
      </Main>
    )
  );
};

export default Page;
