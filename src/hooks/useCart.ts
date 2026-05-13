import { useState } from 'react';

export function useCart() {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount((previous) => previous + 1);
  };

  return {
    count,
    addToCart,
  };
}