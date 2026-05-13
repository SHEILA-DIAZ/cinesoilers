import AppRouter from '@/routes/AppRouter';

import { useCart } from '@/hooks/useCart';

function App() {
  const { count } = useCart();

  return (
    <AppRouter cartCount={count} />
  );
}

export default App;