import { FC } from "react";
import Image from "next/image";

interface IAvatarContainer {
  image_url: string;
  alt: string;
}
export const AvatarContainer: FC<IAvatarContainer> = ({ image_url, alt }) => {
  return (
    <div>
      <Image src={image_url} alt={alt} width={40} height={40} />
    </div>
  );
};
