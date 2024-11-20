import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {CartMain} from '~/components/cart/CartMain';
import {Aside} from '~/providers/Aside';
import type {RootLayoutProps} from '~/types';

export function PdpAside({cart}: {cart: RootLayoutProps['cart']}) {
  return (
    <Aside type="pdp" heading="pdp">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}
