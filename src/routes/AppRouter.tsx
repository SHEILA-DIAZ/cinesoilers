import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';

interface Props {
  cartCount: number;
}

function AppRouter({ cartCount }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <MainLayout cartCount={cartCount} />
          }
        >
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;