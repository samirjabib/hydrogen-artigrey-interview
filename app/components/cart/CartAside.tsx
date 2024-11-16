import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {CartMain} from '~/components/CartMain';
import {Aside} from '~/providers/Aside';
import type {RootLayoutProps} from '~/types';

export function CartAside({cart}: {cart: RootLayoutProps['cart']}) {
  return (
    <Aside type="cart" heading="CART">
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
