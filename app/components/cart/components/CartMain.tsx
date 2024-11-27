import 'swiper/css';

import { useOptimisticCart } from '@shopify/hydrogen';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { CartLineItem } from '~/components/cart/components/cart-line/CartLineItem';
import { CartSummary } from './CartSummary';
import { CartEmpty } from './CartEmpty';
import { HeaderCart } from './HeaderCart';
import { FreeShipping } from './FreeShipping';
import { ProductSlider } from '~/components/design-system/produc-slider/ProductSlider';
import { Await, useLoaderData } from '@remix-run/react';
import { RootLayoutProps } from '~/types';
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RecommendProducts } from './recommend-products/RecommendProducts';



export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
  enhanceCollection: RootLayoutProps['enhanceCollection']
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({ layout, cart: originalCart, enhanceCollection }: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const data = useLoaderData();

  const cart = useOptimisticCart(originalCart);
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const cartHasItems = cart?.totalQuantity > 0;



  return (
    <div>
      <div className='px-[30px]' >
        <HeaderCart totalQuantity={cart?.totalQuantity ?? 0} />
        <FreeShipping total={cart?.cost?.subtotalAmount?.amount ?? '0'} />
        <CartEmpty hidden={linesCount} layout={layout} />
        <div>
          <div aria-labelledby="cart-lines">
            <ul className='bg-[#F6F6F5] p-4 rounded-xl'>
              {(cart?.lines?.nodes ?? []).map((line) => (
                <CartLineItem key={line.id} line={line} layout={layout} />
              ))}
            </ul>
          </div>
          {/*         {cartHasItems && <CartSummary cart={cart} layout={layout} />}
 */}      </div>
      </div>
      <RecommendProducts enhanceCollection={enhanceCollection} />

    </div>

  );
}


