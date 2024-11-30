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
      <Await
        resolve={cart}
        errorElement={<div>Error loading cart</div>}
      >
        {(resolvedCart) => {
          return (
            <SheetContent side="right" className="w-full sm:max-w-[580px] overflow-y-scroll pt-[26px] px-0" classNameCloseButton='right-6 top-10'>
              <SheetHeader>
                <SheetTitle className='sr-only'>
                  Cart
                </SheetTitle>
              </SheetHeader>

              <CartMain cart={resolvedCart} layout="aside" enhanceCollection={enhanceCollection} />;
            </SheetContent>
          )
        }
        }
      </Await>

    </Sheet>
  );
}
