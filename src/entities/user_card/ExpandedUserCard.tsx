import { IPost } from '@/shared/interfaces/post.interface';
import { FC } from 'react';
import { Button } from '@mui/base';
import Link from 'next/link';

const ExpandedUserCard: FC<
  Omit<IPost, 'first_name' | 'last_name' | 'image_url'>
> = ({ username, age, sex, address, coordinates, phone, email }) => {
  return (
    <div>
      <div>
        <h3>{username}</h3>,<h3>{phone}</h3>
        <h3>{age}</h3>,<h3>{sex}</h3>
      </div>
      <div>
        {address}
        {email}
        <Link href={`https://t.me/${username}`} target={'_blank'}>
          <Button>Get telegram</Button>
        </Link>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
          target={'_blank'}
        >
          <Button>View on Map</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExpandedUserCard;
