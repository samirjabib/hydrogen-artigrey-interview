import { Button } from '~/components/ui/Button';
import { AddToCartSectionProps } from '../../types';
import { useOptimisticCart } from '@shopify/hydrogen';
import { CartQuantityControls } from './CartQuantityControls';
import { PriceDisplay } from './PriceDisplay';

export function AddToCartSection({
  price,
  product,
  cart: originalCart,
}: AddToCartSectionProps) {
  if (!product) return null;

  const cart = useOptimisticCart(originalCart);

  const getCartLine = () => cart?.lines?.nodes?.find(
    line => line.merchandise.id === product.variants.nodes[0].id
  );

  const cartLine = getCartLine();
  const totalPrice = cartLine?.cost?.totalAmount?.amount;
  const quantity = cartLine?.quantity || 0;
  const merchandiseId = product?.variants.nodes[0].id;

  return (
    <div className="w-full">
      <div className="bg-black flex flex-row items-center px-[6px] py-[6px] rounded-lg gap-6 sm:gap-[100px] w-full">
        <CartQuantityControls
          cartLine={cartLine}
          quantity={quantity}
          merchandiseId={merchandiseId}
        />
        <PriceDisplay price={totalPrice} />
      </div>
      <Button
        variant="ghost"
        className="text-center w-full pt-5 pb-10"
        onClick={() => {
          /* Handle view full details */
        }}
      >
        View Full Details
      </Button>
    </div>
  );
}
