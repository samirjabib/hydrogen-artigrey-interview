import { useFetcher, useRouteLoaderData } from '@remix-run/react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import type { RootLoader } from '~/root';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { useEffect } from 'react';

export function ProductsQuickView() {
  const fetcher = useFetcher();
  const rootData = useRouteLoaderData<RootLoader>('root');

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

  useEffect(() => {
    if (isOpen && !fetcher.data) {
      fetcher.load('/cart');
    }
  }, [isOpen]);

  const handleClose = () => {
    if (product) {
      close();
    }
  };

  const shouldShowSkeleton = isOpen && (state === 'loading' || fetcher.state === 'loading') && !product && productHandle;
  const cartData = fetcher.data?.cart as CartApiQueryFragment;


  console.log(cartData)

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        {!isOpen ? null : shouldShowSkeleton ? (
          <QuickViewSkeleton key={`skeleton-${productHandle}`} />
        ) : !product || !cartData ? null : (
          <>
            <SheetTitle className='sr-only'>{product.title}</SheetTitle>
            <QuickViewContent
              key={`content-${productHandle}`}
              product={product}
              cart={cartData}
            />
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}