import { useState, useEffect } from 'react';
import { CartBadge } from './CartBadge';
import type { CartToggleProps } from '../types';
import { ShoppingBag } from 'lucide-react';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { Icon } from '../../ui/Icon';
import { useCartStore } from './cartStore';

export function CartToggle({ cart }: CartToggleProps) {
  const [resolvedCart, setResolvedCart] = useState<CartApiQueryFragment | null>(null);
  const open = useCartStore((set) => set.open);
  const { publish, shop, cart: cartAnalytics, prevCart } = useAnalytics();

  // Cargar el carrito de forma asíncrona con useEffect
  useEffect(() => {
    const fetchCart = async () => {
      if (cart) {
        const fetchedCart = await cart;
        setResolvedCart(fetchedCart);
      }
    };

    fetchCart();
  }, [cart])

  if (!resolvedCart) {
    return <div>Loading...</div>; // o un skeleton loader si prefieres
  }

  return (
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
  );
}
