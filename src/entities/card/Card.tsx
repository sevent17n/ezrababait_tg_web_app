import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';

export interface ICard {
  id: number | string;
  image_url: string;
  title: string;
  subtitle?: string;
  link?: string;
  details?: {
    phone?: number;
    address?: string;
  };
  onClick?: Dispatch<SetStateAction<ICard[]>>;
}

const Card: FC<ICard> = ({
  id,
  image_url,
  title,
  link,
  subtitle,
  details,
  onClick,
}) => {
  const [inGroup, setInGroup] = useState(false);

  const handleAddToGroup = () => {
    setInGroup((prevInGroup) => !prevInGroup);
    const newCard = { id, title, image_url };
    onClick &&
      onClick((prevCards) => {
        if (inGroup) {
          return prevCards.filter((card) => card.id !== id);
        } else {
          return [...prevCards, newCard];
        }
      });
  };

  return link ? (
    <div
      style={{
        width: 180,
        border: '1px solid black',
        borderRadius: 8,
        padding: 2,
        margin: 5,
      }}
    >
      <Link href={link}>
        <Image src={image_url} alt={title} width={120} height={120} />
      </Link>

      <div style={{ background: 'blue', color: 'white' }}>
        <h3>{title}</h3>
      </div>
      {subtitle && <h4>{subtitle}</h4>}
      {onClick && (
        <button onClick={handleAddToGroup}>
          {inGroup ? 'Remove from group' : 'Add to group'}
        </button>
      )}
    </div>
  ) : (
    <div>
      <div style={{ width: 120, height: 120 }}>
        <Image src={image_url} alt={title} fill />
      </div>

      <div style={{ background: 'blue' }}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
