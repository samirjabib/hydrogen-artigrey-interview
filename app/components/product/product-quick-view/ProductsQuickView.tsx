import { Suspense } from 'react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { Await } from '@remix-run/react';

export const ErrorDisplay = ({
  message,
  onRetry,
  onClose
}: {
  message: string;
  onRetry: () => void;
  onClose: () => void;
}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onRetry}>Retry</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export function ProductsQuickView({ cart }: { cart: RootLayoutProps['cart'] }) {
  const { isOpen, close, productHandle } = useQuickViewStore();

  const {
    isLoading,
    product,
    error,
    retry,
    clearData
  } = useProductFetcher({
    productHandle,
    isOpen,
    timeout: 5000
  });

  const handleClose = () => {
    clearData();
    close();
  };

  if (error) {
    return (
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent>
          <ErrorDisplay
            message={error}
            onRetry={retry}
            onClose={handleClose}
          />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        <Suspense fallback={<QuickViewSkeleton />}>
          <Await
            resolve={cart}
            errorElement={<div>Error loading cart</div>}
          >
            {(resolvedCart) => (
              isLoading || !product ? (
                <QuickViewSkeleton />
              ) : (
                <>
                  <SheetTitle className='sr-only'>{product.title}</SheetTitle>
                  <QuickViewContent product={product} cart={resolvedCart} />
                </>
              )
            )}
          </Await>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}