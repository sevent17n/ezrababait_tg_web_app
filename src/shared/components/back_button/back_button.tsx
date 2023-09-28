'use client';

import { Button } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <IoIosArrowBack />
    </Button>
  );
};

export default BackButton;
