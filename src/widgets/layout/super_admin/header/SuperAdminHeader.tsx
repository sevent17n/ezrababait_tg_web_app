import Link from 'next/link';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';

const SuperAdminHeader = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li>
            <Link href={'/manage_groups'}>
              <Button disabled={pathname === '/manage_groups'}>Groups</Button>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Button disabled={pathname === '/'}>Workers</Button>
            </Link>
          </li>
          <li>
            <Link href={'/admins'}>
              <Button disabled={pathname === '/admins'}>Admins</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SuperAdminHeader;
