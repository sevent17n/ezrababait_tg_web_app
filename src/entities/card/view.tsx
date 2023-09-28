import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { StyledCard } from "@/src/entities/card/styles";

export interface ICard {
  id: number | string;
  image_url: string;
  title: string;
  subtitle?: string;
  link: string;
  details?: {
    phone?: number;
    address?: string;
  };
  onClick?: Dispatch<SetStateAction<ICard[]>>;
}

export const Card: FC<ICard> = ({
  id,
  image_url,
  title,
  link,
  subtitle,
  details,
  onClick
}) => {
  const [inGroup, setInGroup] = useState(false);

  const handleAddToGroup = () => {
    setInGroup((prevInGroup) => !prevInGroup);
    const newCard = { id, title, image_url, link };
    onClick &&
      onClick((prevCards) => {
        if (inGroup) {
          return prevCards.filter((card) => card.id !== id);
        } else {
          return [...prevCards, newCard];
        }
      });
  };

  return (
    <StyledCard>
      <Link href={link}>
        <Image src={image_url} alt={title} width={80} height={80} />
      </Link>

      <Typography variant={"h3"} sx={{ width: 100 }}>
        {title}
      </Typography>

      {subtitle && <Typography variant={"h4"}>{subtitle}</Typography>}
      {onClick && (
        <Button onClick={handleAddToGroup}>
          {inGroup ? "Remove from group" : "Add to group"}
        </Button>
      )}
    </StyledCard>
  );
};
