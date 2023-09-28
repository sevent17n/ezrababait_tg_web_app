import { FC } from "react";

import Image from "next/image";
import { ICard } from "@/src/entities/card/view";
import CreateGroup from "@/src/features/create_group/CreateGroup";

const SelectedCardsBar: FC<{ cards: Array<ICard> }> = ({ cards }) => {
  const idArray = cards.map((card) => {
    return parseInt(card.id as string);
  });
  return (
    <div className={"my-5"}>
      <div className={"flex"}>
        {cards.map((card, index) => (
          <Image
            key={index}
            src={card.image_url}
            alt={card.title}
            width={50}
            height={50}
          />
        ))}
      </div>

      {cards.length !== 0 && <CreateGroup idArray={idArray} />}
    </div>
  );
};

export default SelectedCardsBar;
