import { useOptimisticCart } from '@shopify/hydrogen';
import { Link } from '@remix-run/react';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { CartLineItem } from '~/components/cart/components/cart-line/CartLineItem';
import { CartSummary } from './CartSummary';
import { useAside } from '~/providers/Aside';
import { CartEmpty } from './CartEmpty';
import { X } from 'lucide-react';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({ layout, cart: originalCart }: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);
  console.log(cart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity > 0;

  return (
    <div className={className}>
      <div className='flex flex-row gap-3'>
        <h2 className='text-[34px] font-medium leading-10'>Your bag</h2>
        <div className='flex items-center justify-center w-9 h-9 bg-[#1B1F23] text-white rounded-full font-normal text-lg leading-5 relative top-1'>
          {cart.totalQuantity}
        </div>
      </div>

      <CartEmpty hidden={linesCount} layout={layout} />
      {/*  <div>
        <div aria-labelledby="cart-lines">
          <ul>
            {(cart?.lines?.nodes ?? []).map((line) => (
              <CartLineItem key={line.id} line={line} layout={layout} />
            ))}
          </ul>
        </div>
        {cartHasItems && <CartSummary cart={cart} layout={layout} />}
      </div> */}
    </div>
  );
}


export const HeaderCart = () => {
  return (
    <div>

    </div>
  )

}