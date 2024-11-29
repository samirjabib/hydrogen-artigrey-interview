import { Await, useAsyncValue } from '@remix-run/react';
import { CartBadge } from './CartBadge';
import { Suspense, useEffect, useState } from 'react';
import type { CartToggleProps } from '../types';
import { ShoppingBag } from 'lucide-react';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { Icon } from '../../ui/Icon';
import { useCartStore } from './cartStore';

function CartButton({ cart }: { cart: CartApiQueryFragment | null }) {
  const [isClient, setIsClient] = useState(false);
  const cartUpdated = useOptimisticCart(cart);
  const open = useCartStore((set) => set.open);
  const { publish, shop, cart: cartAnalytics, prevCart } = useAnalytics();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const quantity = cartUpdated?.totalQuantity ?? cart?.totalQuantity ?? 0;

  return (
    <button
      aria-label="Open cart"
      className="relative cursor-pointer transition-all hover:bg-gray-200 rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        open();
        if (isClient) {
          publish('cart_viewed', {
            cart: cartAnalytics,
            prevCart,
            shop,
            url: window.location.href || '',
          });
        }
      }}
    >
      <CartBadge count={quantity} />
      <Icon name="bag" size={30} />
    </button>
  );
}

export function CartToggle({ cart }: CartToggleProps) {
  return (
    <Suspense fallback={<CartButton cart={null} />}>
      <Await resolve={cart} errorElement={<CartButton cart={null} />}>
        {(resolvedCart) => <CartButton cart={resolvedCart} />}
      </Await>
    </Suspense>
  );
}