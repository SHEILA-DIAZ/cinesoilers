import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';

interface Props {
  cartCount: number;
}

function MainLayout({ cartCount }: Props) {
  return (
    <>
      <Navbar cartCount={cartCount} />

      <main
        style={{
          padding: '2rem',
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;