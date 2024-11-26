import { useOptimisticCart } from '@shopify/hydrogen';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { CartLineItem } from '~/components/cart/components/cart-line/CartLineItem';
import { CartSummary } from './CartSummary';
import { CartEmpty } from './CartEmpty';
import { HeaderCart } from './HeaderCart';
import { FreeShipping } from './FreeShipping';

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
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const cartHasItems = cart?.totalQuantity > 0;



  return (
    <div>
      <HeaderCart totalQuantity={cart?.totalQuantity ?? 0} />
      <FreeShipping total={cart?.cost?.subtotalAmount?.amount ?? '0'} />
      <CartEmpty hidden={linesCount} layout={layout} />
      <div>
        <div aria-labelledby="cart-lines">
          <ul>
            {(cart?.lines?.nodes ?? []).map((line) => (
              <CartLineItem key={line.id} line={line} layout={layout} />
            ))}
          </ul>
        </div>
        {/*         {cartHasItems && <CartSummary cart={cart} layout={layout} />}
 */}      </div>
      <div>

      </div>
    </div>
  );
}


