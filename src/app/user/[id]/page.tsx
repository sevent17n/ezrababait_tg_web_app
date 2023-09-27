'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParamsHelper } from '@/shared/helpers/search_params.helper';
import { AdminService } from '@/shared/api/services/admin.service';
import Image from 'next/image';

const Page = () => {
  const id = useSearchParamsHelper('id');
  const { data: user, isLoading } = useQuery(
    ['get user by id'],
    async () => await AdminService.getUserById(parseInt(id.toString()))
  );

  return (
    !isLoading &&
    user && (
      <div>
        <Image
          src={user.photo_url}
          alt={user.first_name}
          width={150}
          height={150}
        />
      </div>
    )
  );
};

export default Page;
