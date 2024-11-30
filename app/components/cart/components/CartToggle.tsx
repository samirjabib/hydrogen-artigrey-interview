import { Await, useRevalidator } from '@remix-run/react';
import { CartBadge } from './CartBadge';
import type { CartToggleProps } from '../types';
import { useAnalytics } from '@shopify/hydrogen';
import { Icon } from '../../ui/Icon';
import { useCartStore } from './cartStore';
import { Suspense, useEffect } from 'react';

export function CartToggle({ cart }: CartToggleProps) {
  const open = useCartStore((set) => set.open);
  const { publish, shop, cart: cartAnalytics, prevCart } = useAnalytics();
  const { revalidate } = useRevalidator();

  // Revalidar el carrito cuando el componente se monta
  useEffect(() => {
    revalidate();
  }, []);

  const cartButton = (count: number = 0) => (
    <button
      aria-label="Open cart"
      className="relative cursor-pointer transition-all hover:bg-gray-200 rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        open();
        publish('cart_viewed', {
          cart: cartAnalytics,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      <CartBadge count={count} />
      <Icon name="bag" size={30} />
    </button>
  );

  return (
    <Suspense fallback={cartButton(0)}>
      <Await resolve={cart}>
        {(resolvedCart) => {
          if (!resolvedCart) {
            return cartButton(0);
          }
          return cartButton(resolvedCart.totalQuantity ?? 0);
        }}
      </Await>
    </Suspense>
  );
}