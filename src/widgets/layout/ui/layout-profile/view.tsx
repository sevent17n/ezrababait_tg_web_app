"use client";

import { useAuth } from "@/src/shared/hooks/use-auth";

import { StyledProfilePicture } from "@/src/widgets/layout/ui/layout-profile/styles";
export const LayoutProfile = () => {
  const { user } = useAuth();
  return (
    user && (
      <StyledProfilePicture
        src={
          //@ts-ignore
          user.photo_url
        }
        alt={user.first_name}
        width={40}
        height={40}
      />
    )
  );
};
