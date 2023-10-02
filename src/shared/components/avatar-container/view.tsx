import { FC } from "react";
import Image from "next/image";
import { StyledAvatarContainer } from "@/src/shared/components/avatar-container/styles";

interface IAvatarContainer {
  image_url: string;
  alt: string;
}
export const AvatarContainer: FC<IAvatarContainer> = ({ image_url, alt }) => {
  return (
    <StyledAvatarContainer>
      <Image src={image_url} alt={alt} width={50} height={50} />
    </StyledAvatarContainer>
  );
};
