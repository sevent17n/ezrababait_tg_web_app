import { FC } from 'react';
import Image from 'next/image';

export interface IAvatarContainer {
  image_url: string;
  alt: string;
}
const AvatarContainer: FC<IAvatarContainer> = ({ image_url, alt }) => {
  return (
    <div>
      <Image src={image_url} alt={alt} width={40} height={40} />
    </div>
  );
};

export default AvatarContainer;
