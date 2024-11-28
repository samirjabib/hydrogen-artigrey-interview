import { TotalItems } from './TotalItems';
import { SubtotalInformation } from './SubtotalInformation';
import { CartSummaryProps } from '../types';
import { Button } from '~/components/ui/Button';
import { useOptimisticCart } from '@shopify/hydrogen';
import { useCartStore } from '~/components/cart/components/cartStore';
import { useQuickViewStore } from '../quickViewStore';

export function CartSummary({ cart: originalCart }: CartSummaryProps) {
  const cart = useOptimisticCart(originalCart);
  const totalItems = cart?.totalQuantity ?? 0;
  const subtotal = cart?.cost?.subtotalAmount?.amount;

  const openCart = useCartStore((state) => state.open);
  const closeQuickView = useQuickViewStore((state) => state.close);

  const handleViewCart = () => {
    closeQuickView();
    openCart();
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 sm:justify-between mt-4 sm:mt-6 mb-5"
      aria-label="Cart Summary"
    >
      <Button
        onClick={handleViewCart}
        variant="outline"
        className="w-full sm:w-auto text-black py-2 px-3 text-[11px] leading-3 order-3 sm:order-1"
        aria-label="View Cart"
      >
        View Cart
      </Button>
      <div className="flex items-center gap-6 sm:gap-8 order-2">
        <TotalItems totalItems={totalItems} />
        <SubtotalInformation subtotal={subtotal} />
      </div>
    </div>
  );
}
