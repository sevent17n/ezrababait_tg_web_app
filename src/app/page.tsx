'use client';

import UserList from '@/features/user_list/UserList';
import axios from 'axios';

const Home = () => {
  return (
    <main className="px-2">
      <UserList />
    </main>
  );
};

export default Home;
