import Image from "next/image";
import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface ISearchResult {
  image_url: string;
  title: string;
}
export const SearchResult: FC<ISearchResult> = ({ image_url, title }) => {
  return (
    <Box>
      <Image src={image_url} alt={title} width={50} height={50} />
      <Typography variant={"h3"}>{title}</Typography>
    </Box>
  );
};
