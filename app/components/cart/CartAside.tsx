import { Await } from '@remix-run/react';
import { Suspense } from 'react';
import { CartMain } from '~/components/cart/components/CartMain';
import type { RootLayoutProps } from '~/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { useCartStore } from './components/cartStore';

export function CartAside({ cart, enhanceCollection }: { cart: RootLayoutProps['cart'], enhanceCollection: RootLayoutProps['enhanceCollection'] }) {
  const isOpen = useCartStore((set) => set.isOpen);
  const close = useCartStore((set) => set.close);

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent side="right" className="w-full sm:max-w-[580px] overflow-y-scroll pt-[26px] px-0" classNameCloseButton='right-6 top-10'>
        <SheetHeader>
          <SheetTitle className='sr-only'>
            Cart
          </SheetTitle>
        </SheetHeader>
        <Suspense fallback={<p>Loading cart ...</p>}>
          <Await resolve={cart}>
            {(cart) => {
              return <CartMain cart={cart} layout="aside" enhanceCollection={enhanceCollection} />;
            }}
          </Await>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}
