"use client";
import UserList from "@/src/widgets/user_list/UserList";
import { Search } from "@/src/features/search";
import { CopyLink } from "@/src/shared/components/copy-link";
import { Container } from "@mui/material";
import { StyledUserListContainer } from "@/src/screens/home/styles";

export const Home = () => {
  return (
    <Container>
      <Search />
      <StyledUserListContainer>
        <UserList />
      </StyledUserListContainer>
      <CopyLink />
    </Container>
  );
};
