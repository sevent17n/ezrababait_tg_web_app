import Card, { ICard } from '@/entities/card/Card';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface ICardsLayout {
  cards: Array<ICard>;
  onClick?: Dispatch<SetStateAction<ICard[]>>;
}
const CardsLayout: FC<ICardsLayout> = ({ cards, onClick }) => {
  return (
    <div className={'flex flex-wrap'} style={{ width: 600 }}>
      {cards.map((card, index) => (
        <Card
          id={card.id}
          onClick={onClick}
          image_url={card.image_url}
          title={card.title}
          key={index}
          link={card.link}
          details={card.details}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default CardsLayout;
