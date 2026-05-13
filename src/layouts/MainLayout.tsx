import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <main>
      <header>
        <h2>CineSoilerS</h2>
      </header>

      <Outlet />
    </main>
  );
}

export default MainLayout;