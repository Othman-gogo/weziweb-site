import { useState, useEffect } from 'react';
import { store } from '../lib/store';

export function useStore() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate({});
    });
    return unsubscribe;
  }, []);

  return {
    cart: store.getCart(),
    cartTotal: store.getCartTotal(),
    cartCount: store.getCartCount(),
    user: store.getUser(),
    addToCart: (product: any) => store.addToCart(product),
    removeFromCart: (id: string) => store.removeFromCart(id),
    updateQuantity: (id: string, quantity: number) => store.updateQuantity(id, quantity),
    clearCart: () => store.clearCart(),
    setUser: (user: any) => store.setUser(user)
  };
}
