import { Suspense, useEffect } from 'react';
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';
import { Await, useNavigate } from '@remix-run/react';

const CART_TIMEOUT = 5000; // 5 seconds timeout

export function ProductsQuickView({ cart }: { cart: RootLayoutProps['cart'] }) {
  const navigate = useNavigate();
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
    if (isOpen) {
      let timeoutId = setTimeout(() => {
        // Si después del timeout el carrito aún no ha resuelto, refrescamos la página
        console.warn('Cart resolution timeout, refreshing...');
        navigate('.', { replace: true });
      }, CART_TIMEOUT);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, cart, navigate]);

  const handleClose = () => {
    if (product) {
      close();
    }
  };

  const shouldShowSkeleton = isOpen && (state === 'loading' || !cart) && productHandle;

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-scroll">
        <Suspense
          fallback={
            <QuickViewSkeleton
              key={`skeleton-suspense-${productHandle}-${Date.now()}`}
            />
          }
        >
          <Await
            resolve={cart}
            errorElement={
              <div className="flex flex-col items-center justify-center p-4">
                <p>Error loading cart</p>
                <button
                  onClick={() => navigate('.', { replace: true })}
                  className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Retry
                </button>
              </div>
            }
          >
            {(resolvedCart) => {
              if (!isOpen) return null;

              if (shouldShowSkeleton) {
                return (
                  <QuickViewSkeleton
                    key={`skeleton-${productHandle}-${Date.now()}`}
                  />
                );
              }

              if (!product || !resolvedCart) return null;

              return (
                <>
                  <SheetTitle className='sr-only'>{product.title}</SheetTitle>
                  <QuickViewContent
                    key={`content-${productHandle}-${Date.now()}`}
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