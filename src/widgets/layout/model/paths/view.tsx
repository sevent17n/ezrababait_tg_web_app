"use client";
import { FC } from "react";
import { IPathList } from "@/src/widgets/layout/interface";
import { Button, List, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Paths: FC<IPathList> = ({ paths }) => {
  const pathname = usePathname();
  return (
    <List>
      {paths.map((path) => (
        <ListItem key={path.link}>
          {pathname === path.link ? (
            <Button disabled>{path.label}</Button>
          ) : (
            <Link href={path.link}>
              <Button>{path.label}</Button>
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  );
};
