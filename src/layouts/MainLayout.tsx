<<<<<<< HEAD
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
=======
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'

type Props = {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  )
}

export default MainLayout
>>>>>>> feature/evidencias-naomi
