import { Dispatch, FC, SetStateAction, useState } from "react";
import { Card } from "@/src/entities/card";
import { ICard } from "@/src/entities/card/view";
import { StyledCardsLayout } from "@/src/widgets/cards_layout/styles";

interface ICardsLayout {
  cards: Array<ICard>;
  onClick?: Dispatch<SetStateAction<ICard[]>>;
}
const CardsLayout: FC<ICardsLayout> = ({ cards, onClick }) => {
  return (
    <StyledCardsLayout>
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
    </StyledCardsLayout>
  );
};

export default CardsLayout;
