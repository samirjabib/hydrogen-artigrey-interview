import { Suspense } from 'react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { Await } from '@remix-run/react';
import { useCart } from '~/providers/CartProvider';
import { CartApiQueryFragment } from 'storefrontapi.generated';

export function ProductsQuickView() {
  const isOpen = useQuickViewStore((set) => set.isOpen);
  const close = useQuickViewStore((set) => set.close);
  const productHandle = useQuickViewStore((set) => set.productHandle);

  const {
    state,
    product,
  } = useProductFetcher({
    productHandle,
    isOpen,
  });

  const handleClose = () => {
    if (product) {
      close();
    }
  };

  const cart = useCart();
  const shouldShowSkeleton = isOpen && state === 'loading' && !product && productHandle;

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        {!isOpen ? null : shouldShowSkeleton ? (
          <QuickViewSkeleton key={`skeleton-${productHandle}`} />
        ) : !product || !cart ? null : (
          <>
            <SheetTitle className='sr-only'>{product.title}</SheetTitle>
            <QuickViewContent
              key={`content-${productHandle}`}
              product={product}
              cart={cart as CartApiQueryFragment}
            />
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}