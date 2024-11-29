import { Await, useAsyncValue } from '@remix-run/react';
import { CartBadge } from './CartBadge';
import { Suspense } from 'react';
import type { CartToggleProps } from '../types';
import { ShoppingBag } from 'lucide-react';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { Icon } from '../../ui/Icon';
import { useCartStore } from './cartStore';

export function CartToggle({ cart }: CartToggleProps) {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cartUpdated = useOptimisticCart(originalCart);
  const open = useCartStore((set) => set.open);
  const { publish, shop, cart: cartAnalytics, prevCart } = useAnalytics();


  return (
    <Suspense fallback={<div>error de hydratacion</div>}>
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
            <CartBadge count={resolvedCart?.totalQuantity ?? cartUpdated?.totalQuantity ?? 0} />
            <Icon name="bag" size={30} />
          </button>
        )}
      </Await>
    </Suspense>
  );
}