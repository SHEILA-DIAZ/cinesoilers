import AppRouter from '@/routes/AppRouter';

import { useCart } from '@/hooks/useCart';

function App() {
  const { count } = useCart();

  return (
    <AppRouter cartCount={count} />
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
