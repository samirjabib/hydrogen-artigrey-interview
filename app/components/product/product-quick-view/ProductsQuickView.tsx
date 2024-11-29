import { useRouteLoaderData, useAsyncValue } from '@remix-run/react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import type { RootLoader } from '~/root';
import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { useState, useEffect } from 'react';

export function ProductsQuickView() {
  const rootData = useRouteLoaderData<RootLoader>('root');
  const cartPromise = rootData?.cart;

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

  // Usamos useEffect para manejar la promesa del carrito
  useEffect(() => {
    if (cartPromise) {
      cartPromise.then((cart) => {
        if (cart) {
          setCartData(cart as CartApiQueryFragment);
        }
      });
    }
  }, [cartPromise]);

  const [cartData, setCartData] = useState<CartApiQueryFragment | null>(null);

  if (!cartData) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        {!isOpen ? null : shouldShowSkeleton ? (
          <QuickViewSkeleton key={`skeleton-${productHandle}`} />
        ) : !product ? null : (
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