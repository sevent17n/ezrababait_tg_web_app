'use client';

import UserList from '@/widgets/user_list/UserList';
import './globals.css';
import CopyLinkButton from '@/shared/ui/CopyBotLinkButton/CopyLinkButton';
import Search from '@/entities/search/SearchField';
const Home = () => {
  return (
    <main className="px-2">
      <Search />
      <UserList />
      <CopyLinkButton />
    </main>
  );
};

export default Home;
