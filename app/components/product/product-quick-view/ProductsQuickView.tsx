import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './quickViewStore';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';
import { QuickViewSkeleton } from './components/QuickViewSkeleton';


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
  })

  if (error) {
    return (
      <ErrorDisplay
        message={error}
        onRetry={retry}
        onClose={() => {
          clearData();
        }}
      />
    );
  }

  if (!product) {
    return null;
  }


  return (
    <Sheet
      open={isOpen}
      onOpenChange={() => {
        clearData();
        close();
      }}
    >
      <SheetContent className="overflow-y-scroll">
        {isLoading
          ? <QuickViewSkeleton /> :
          <>
            <SheetTitle className='sr-only'>{product.title}</SheetTitle>
            <QuickViewContent product={product} cart={cart} />
          </>
        }
      </SheetContent>
    </Sheet>
  );
}