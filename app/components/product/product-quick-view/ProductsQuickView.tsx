import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { CartApiQueryFragment } from 'storefrontapi.generated';

export function ProductsQuickView({ cart }: { cart: CartApiQueryFragment | null }) {
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

  if (!cart || !isOpen) return null;

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        {shouldShowSkeleton ? (
          <QuickViewSkeleton key={`skeleton-${productHandle}`} />
        ) : product ? (
          <>
            <SheetTitle className='sr-only'>{product.title}</SheetTitle>
            <QuickViewContent
              key={`content-${productHandle}`}
              product={product}
              cart={cart}
            />
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}