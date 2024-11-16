import {Await, useAsyncValue} from '@remix-run/react';
import {CartBadge} from './CartBadge';
import {Suspense} from 'react';
import type {CartToggleProps} from './types';
import {ShoppingBag} from 'lucide-react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/providers/Aside';

export function CartToggle({cart}: CartToggleProps) {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cartUpdated = useOptimisticCart(originalCart);
  const {open} = useAside();
  const {publish, shop, cart: cartAnalytics, prevCart} = useAnalytics();

  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <button
          aria-label="Open cart"
          className="relative cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            open('cart');
            publish('cart_viewed', {
              cart: cartAnalytics,
              prevCart,
              shop,
              url: window.location.href || '',
            });
          }}
        >
          <CartBadge count={cartUpdated?.totalQuantity ?? 0} />
          <ShoppingBag size={16} />
        </button>
      </Await>
    </Suspense>
  );
}
