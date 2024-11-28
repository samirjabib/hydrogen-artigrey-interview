import 'swiper/css';

import { useOptimisticCart } from '@shopify/hydrogen';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { CartLineItem } from '~/components/cart/components/cart-line/CartLineItem';
import { CartSummary } from './CartSummary';
import { CartEmpty } from './CartEmpty';
import { HeaderCart } from './HeaderCart';
import { FreeShipping } from './FreeShipping';
import { RootLayoutProps } from '~/types';
import { RecommendProducts } from './recommend-products/RecommendProducts';


export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
/*   enhanceCollection: RootLayoutProps['enhanceCollection']
 */};

export function CartMain({ layout, cart: originalCart, enhanceCollection }: CartMainProps) {
  const cart = useOptimisticCart(originalCart);
  const cartHasItems = cart?.totalQuantity !== undefined && cart?.totalQuantity > 0;
  const linesCount = cart?.lines?.nodes?.length !== undefined && cart?.lines?.nodes?.length > 3;

  return (
    <div>
      <div className='px-4 sm:px-[30px]'>
        <HeaderCart totalQuantity={cart?.totalQuantity ?? 0} />
        <FreeShipping total={cart?.cost?.subtotalAmount?.amount ?? '0'} />
        {!cartHasItems && <CartEmpty layout={layout} />}
        {cartHasItems && (
          <div>
            <div aria-labelledby="cart-lines">
              <ul className={`bg-[#F6F6F5] flex flex-col gap-4 p-4 rounded-xl ${linesCount ? 'max-h-[420px] overflow-y-auto' : ''}`}>
                {(cart?.lines?.nodes ?? []).map((line) => {
                  return ((
                    <CartLineItem key={line.id} line={line} />
                  ))
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      {/*       <RecommendProducts enhanceCollection={enhanceCollection} />
 */}      {cartHasItems && <CartSummary cart={cart} layout={layout} />}
    </div>

  );
}