import 'swiper/css';

import { useEffect } from 'react';
import { useFetcher, useRevalidator, useSearchParams } from '@remix-run/react';
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
  enhanceCollection: RootLayoutProps['enhanceCollection']
};

export function CartMain({ layout, cart: originalCart, enhanceCollection }: CartMainProps) {
  const cart = useOptimisticCart(originalCart);
  console.log('cart original', originalCart);
  console.log('cart', cart);
  const cartHasItems = cart?.totalQuantity > 0;
  const linesCount = cart?.lines?.nodes?.length > 3;

  const cartFetcher = useFetcher();

  useEffect(() => {
    // Forzar recarga del carrito si hay discrepancias
    if (cart?.totalQuantity !== originalCart?.totalQuantity) {
      cartFetcher.load('/cart'); // Asume que tienes una ruta para cargar el carrito
    }
  }, [cart, originalCart]);

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
                    <CartLineItem key={line.id} line={line} layout={layout} />
                  ))
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <RecommendProducts enhanceCollection={enhanceCollection} />
      {cartHasItems && <CartSummary cart={cart} layout={layout} />}
    </div>

  );
}
