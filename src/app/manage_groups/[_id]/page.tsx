'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { GroupService } from '@/shared/api/services/group.service';
import NotFound from 'next/dist/client/components/not-found-error';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Search from '@/entities/search/SearchField';
import { IUserState } from '@/store/user/user.interface';

const Page = () => {
  const searchParams = useParams();

  let id: string = '';

  if (searchParams && '_id' in searchParams) {
    if (typeof searchParams['_id'] === 'string') {
      id = searchParams['_id'] as string;
    } else if (Array.isArray(searchParams['_id'])) {
      id = searchParams['_id'].join(',');
    }
  }
  const { data: group, isLoading } = useQuery(
    ['get group by id'],
    async () => searchParams && (await GroupService.getById(id))
  );
  const [isAdminFormOpened, setIsAdminFormOpened] = useState(false);
  const [isMemberFormOpened, setIsMemberFormOpened] = useState(false);
  const [type, setType] = useState('admin');
  const { handleSubmit } = useForm();
  const [user, setUser] = useState<IUserState | null>(null);
  const onSubmit = async () => {
    if (user && group) {
      if (type === 'admin') {
        await GroupService.addAdmin(user.username, group._id);
      } else {
        await GroupService.addMember(user.username, group._id);
      }
      setUser(null);
    }
  };

  return !isLoading && group ? (
    <div>
      <div className={'flex gap-32'}>
        <Image
          src={group.image_url}
          alt={group.name}
          width={200}
          height={200}
        />
        <h1>{group.name}</h1>
      </div>
      {!group.admin && (
        <Button
          onClick={() => {
            setType('admin');
            setIsAdminFormOpened(true);
          }}
        >
          Add admin
        </Button>
      )}
      {isAdminFormOpened && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Search setUser={setUser} />
          {user && (
            <p>Selected User: {user.first_name + ' ' + user.last_name}</p>
          )}
          <Button
            onClick={() => {
              setUser(null);
              setIsAdminFormOpened(false);
            }}
          >
            Cancel
          </Button>
          <Button type={'submit'}>Add</Button>
        </form>
      )}
      {group.admin ? (
        <div>
          <h1>Admin:</h1>
          <div>
            <Image
              src={group.admin.photo_url}
              alt={group.admin.first_name}
              width={100}
              height={100}
            />
            <p>{group.admin.first_name + ' ' + group.admin.last_name}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>No admin</h1>
        </div>
      )}
      <Button
        onClick={() => {
          setType('member');
          setIsMemberFormOpened(true);
        }}
      >
        Add member
      </Button>
      {isMemberFormOpened && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Search setUser={setUser} />

          {user && (
            <p>Selected User: {user.first_name + ' ' + user.last_name}</p>
          )}
          <Button
            onClick={() => {
              setIsMemberFormOpened(false);
              setUser(null);
            }}
          >
            Cancel
          </Button>
          <Button type={'submit'}>Add</Button>
        </form>
      )}
      {group.members.length ? (
        <div>
          Members:
          {group.members.map((member, index) => (
            <div key={index}>
              <Image
                src={member.photo_url}
                alt={member.first_name}
                width={100}
                height={100}
              />
              <p>{member.first_name + ' ' + member.last_name}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>No members</h1>
      )}
    </div>
  ) : (
    <NotFound />
  );
};

export default Page;
