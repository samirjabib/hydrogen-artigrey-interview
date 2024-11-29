import type { RootLayoutProps } from '~/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { useCartStore } from './components/cartStore';
import { CartApiQueryFragment } from 'storefrontapi.generated';
import { CartMain } from '~/components/cart/components/CartMain';

export function CartAside({ cart, enhanceCollection }: { cart: CartApiQueryFragment | null, enhanceCollection: RootLayoutProps['enhanceCollection'] }) {
  const isOpen = useCartStore((set) => set.isOpen);
  const close = useCartStore((set) => set.close);

  if (!cart) return null;

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent side="right" className="w-full sm:max-w-[580px] overflow-y-scroll pt-[26px] px-0" classNameCloseButton='right-6 top-10'>
        <SheetHeader>
          <SheetTitle className='sr-only'>
            Cart
          </SheetTitle>
        </SheetHeader>
        <CartMain cart={cart} layout="aside" enhanceCollection={enhanceCollection} />
      </SheetContent>
    </Sheet>
  );
}