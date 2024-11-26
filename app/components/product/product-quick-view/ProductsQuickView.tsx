import { Suspense } from 'react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { Await } from '@remix-run/react';

export function ProductsQuickView({ cart }: { cart: RootLayoutProps['cart'] }) {

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


  const shouldShowSkeleton = isOpen && state === 'loading' && !product && productHandle;

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        <Suspense fallback={null}>
          <Await
            resolve={cart}
            errorElement={<div>Error loading cart</div>}
          >
            {(resolvedCart) => {
              if (!isOpen) return null;

              if (shouldShowSkeleton) {
                return <QuickViewSkeleton key={`skeleton-${productHandle}`} />;
              }

              if (!product) return null;

              return (
                <>
                  <SheetTitle className='sr-only'>{product.title}</SheetTitle>
                  <QuickViewContent
                    key={`content-${productHandle}`}
                    product={product}
                    cart={resolvedCart}
                  />
                </>
              );
            }}
          </Await>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}