'use client';

import UserList from '@/features/user_list/UserList';
import crypto from 'crypto';
import axios from 'axios';

const Home = () => {
  const queryString: string = window.location.search;

  const queryParameters: string[] = queryString.slice(1).split('&');

  const queryObject: { [key: string]: any } = {};

  queryParameters.forEach((param: string) => {
    const [key, value] = param.split('=');
    queryObject[key] = value;
  });

  const { hash, ...data } = queryObject;

  const verifyObject = {
    ...data,
  };

  const dataCheckArray = Object.entries(verifyObject).map(
    ([key, value]) => `${key}=${value}`
  );

  console.log(queryObject);
  dataCheckArray.sort();
  const dataCheckString = dataCheckArray.join('/');

  console.log(
    axios
      .post(
        `http://localhost:5000/api/auth/verify?checkString=${dataCheckString}&hash=${hash}`
      )
      .then((data) => data)
  );

  return (
    <main className="px-2">
      <UserList />
    </main>
  );
};

export default Home;
