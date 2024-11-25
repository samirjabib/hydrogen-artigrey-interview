import { Suspense, memo } from 'react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { Await } from '@remix-run/react';

const MemoizedQuickViewContent = memo(QuickViewContent);

export function ProductsQuickView({ cart }: { cart: RootLayoutProps['cart'] }) {
  const { isOpen, close, productHandle } = useQuickViewStore();

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

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        <Suspense fallback={<QuickViewSkeleton />}>
          <Await
            resolve={cart}
            errorElement={<div>Error loading cart</div>}
          >
            {(resolvedCart) => {
              /*     if (state === 'loading' || !product) {
                    return <QuickViewSkeleton key={`skeleton-${productHandle}`} />;
                  }
     */
              return (
                <>
                  <SheetTitle className='sr-only'>{product?.title}</SheetTitle>
                  <MemoizedQuickViewContent
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