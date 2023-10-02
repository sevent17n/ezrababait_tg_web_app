import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, CardContent, Typography } from "@mui/material";
import {
  StyledCard,
  StyledCardTitle,
  StyledImageContainer
} from "@/src/entities/card/styles";

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
        <StyledImageContainer>
          <Image src={image_url} alt={title} fill />
        </StyledImageContainer>
      </Link>
      <CardContent>
        <StyledCardTitle>
          <Typography variant={"h3"}>{title}</Typography>
        </StyledCardTitle>

        {subtitle && <Typography variant={"h4"}>{subtitle}</Typography>}
        {onClick && (
          <Button
            onClick={handleAddToGroup}
            sx={{
              fontSize: 14,
              height: 20,
              width: 50
            }}
          >
            {inGroup ? "Remove" : "Add"}
          </Button>
        )}
      </CardContent>
    </StyledCard>
  );
};
