import { Await } from '@remix-run/react';
import { CartBadge } from './CartBadge';
import type { CartToggleProps } from '../types';

import { useAnalytics } from '@shopify/hydrogen';
import { Icon } from '../../ui/Icon';
import { useCartStore } from './cartStore';

export function CartToggle({ cart }: CartToggleProps) {
  const open = useCartStore((set) => set.open);
  const { publish, shop, cart: cartAnalytics, prevCart } = useAnalytics();


  return (
    <Await resolve={cart}>
      {(resolvedCart) => (
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
          <CartBadge count={resolvedCart?.totalQuantity ?? 0} />
          <Icon name="bag" size={30} />
        </button>
      )}
    </Await>
  );
}