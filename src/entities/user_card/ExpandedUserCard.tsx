import { IPost } from '@/shared/interfaces/post.interface';
import { FC } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

const ExpandedUserCard: FC<
  Omit<IPost, 'first_name' | 'last_name' | 'image_url'>
> = ({ username, age, sex, address, coordinates, phone, email }) => {
  return (
    <div style={{ display: 'flex', background: '#6badf8' }}>
      <div style={{ width: 200 }}>
        <h3>username: {username}</h3>
        <h3>phone: {phone}</h3>
        <h3>age: {age}</h3>

        <Link href={`https://t.me/${username}`} target={'_blank'}>
          <Button>Get telegram</Button>
        </Link>
      </div>
      <div style={{ width: 200 }}>
        <h3>address: {address.slice(0, 20)}...</h3>
        <h3>email: {email}</h3>
        <h3>gender: {sex}</h3>
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
