import AddAdmin from '@/widgets/layout/super_admin/header/AddAdmin/AddAdmin';
import Link from 'next/link';

const SuperAdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={'/manage_groups'}>Manage groups</Link>
          </li>
        </ul>
      </nav>
      <AddAdmin />
    </header>
  );
};

export default SuperAdminHeader;
