
import { AddToCartSection } from './components/AddToCartSection';
import { CartSummary } from './components/CartSummary';
import { PurchaseOption } from './components/PurshaseOption';
import { cn } from '~/utils/cn';
import { useFetcher } from '@remix-run/react';
import { ProductHeader } from './components/product-variant-table/ProductHeader';
import { ProductsQuickViewProps } from './types';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '~/components/ui/sheet';
import { Button } from '~/components/ui/Button';
import { ProductVariantTable } from './components/product-variant-table/ProductVariantTable';

export function ProductsQuickView({
  variant,
  product,
}: ProductsQuickViewProps) {
  console.log(product);

  const isProductWithVariants = product.variants.nodes.length > 0;
  /* 
  other way to fetch data reusing logic by produc handle route */

  // const fetcher = useFetcher();

  /*  useEffect(() => {
     fetcher.load(`/products/${product.handle}`);
   }, [product.handle]);
 
   if (fetcher.state === 'loading') {
     return <p>Loading product details...</p>;
   }
 
   if (!fetcher.data) {
     return <p>No product details available.</p>;
   } */

  const isProductWithSellingPlanGroups = product.sellingPlanGroups.nodes.length > 0;

  const buttonLabel = variant === 'default' ? `Add • $${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}` : 'Add to Cart'

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn(isProductWithSellingPlanGroups ? 'text-sm' : 'font-medium text-[13px] py-[5px] px-4 inline-flex')}>
          {buttonLabel}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetTitle className='sr-only'>{product.title}</SheetTitle>
        <section className="w-full">
          <ProductHeader
            title={product.title}
            subtitle={product.description}
            reviewCount={120}
            tags={product.tags}
            imageSrc={product.images.nodes[0].url}
            imageAlt={product.title}
          />
          <div className="mt-10">
            <ProductVariantTable variants={product.variants.nodes} />
            <CartSummary totalItems={20} subtotal={249.95} />
            {isProductWithVariants ? (
              <div className="flex-col sm:flex-row bg-[#F6F6F5] p-4 rounded-md flex gap-[10px] mb-5">
                <PurchaseOption
                  label="One-Time Purchase"
                  price={49.95}
                  frequency="Delivery Every 2 Months"
                  className="w-full sm:w-1/2"
                />
                <PurchaseOption
                  label="Subscribe & Save"
                  price={49.95}
                  frequency="Delivery Every 2 Months"
                  className="w-full sm:w-1/2"
                />
              </div>
            ) : null
            }


            <AddToCartSection
              initialQuantity={1}
              price={39.96}
              onQuantityChange={(qty) =>
                console.log(`Quantity changed to: ${qty}`)
              }
              onAddToCart={() => console.log('Added to cart')}
            />
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
