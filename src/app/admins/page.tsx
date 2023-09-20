'use client';
import AddAdmin from '@/features/add_admin/AddAdmin';
import { useQuery } from '@tanstack/react-query';
import { SuperAdminService } from '@/shared/api/services/super_admin.service';
import Image from 'next/image';
const Page = () => {
  const { data, isLoading } = useQuery(
    ['getAdmins'],
    async () => await SuperAdminService.getAdmins()
  );

  return (
    <div>
      <AddAdmin />
      <div
        style={{
          display: 'flex',
          gap: 15,
          flexWrap: 'wrap',
          width: 500,
          padding: '0 10px',
        }}
      >
        {!isLoading &&
          data &&
          data.map((admin, index) => (
            <div key={index} style={{ width: 140 }}>
              <Image
                src={admin.photo_url}
                alt={admin.first_name}
                width={140}
                height={140}
              />
              <p>{admin.first_name + ' ' + admin.last_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
