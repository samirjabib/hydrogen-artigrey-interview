import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet';
import { RootLayoutProps } from '~/types';
import { useQuickViewStore } from './store';
import { useProductFetcher } from './hooks/useProductFetcher';
import { QuickViewContent } from './components/QuickViewContent';

export function ProductsQuickView({ cart }: { cart: RootLayoutProps['cart'] }) {
  const { isOpen, close, productHandle } = useQuickViewStore();
  const { isLoading, product, clearData } = useProductFetcher(productHandle, isOpen);

  if (isLoading) {
    return <p>Loading product details...</p>;
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
        <SheetTitle className='sr-only'>{product.title}</SheetTitle>
        <QuickViewContent product={product} />
      </SheetContent>
    </Sheet>
  );
}