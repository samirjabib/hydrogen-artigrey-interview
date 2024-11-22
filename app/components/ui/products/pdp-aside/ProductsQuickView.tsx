import {Button} from '../../Button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../sheet';
import {AddToCartSection} from './AddToCartSection';
import {CartSummary} from './CartSummary';
import {ProductVariantTable} from './product-variant-table/ProductVariantTable';
import {ProductHeader} from './ProductHeader';
import {PurchaseOption} from './PurshaseOption';
import type {Variant} from '../product-card/ProductCard';
import { CollectionProductFragment } from 'storefrontapi.generated';
import { cn } from '~/utils/cn';

const variants = [
  {
    name: 'Small',
    price: '$49.95a',
    discount: '0%',
    total: '$00.00',
    size: '30 Capsulas',
  },
  {
    name: 'Medium',
    size: '60 Capsulas',
    price: '$49.95',
    discount: '5%',
    total: '$249.95',
  },
  {
    name: 'Large',
    size: '90 Capsulas',
    price: '$49.95',
    discount: '5%',
    total: '$249.95',
  },
];

export function ProductsQuickView({
  variant,
  product,
}: {
  product: CollectionProductFragment;
  variant?: Variant;
}) {


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn("",  product.sellingPlanGroups.nodes.length > 0 ? 'text-sm' : 'font-medium text-[13px] py-[5px] px-4 inline-flex')}>
          {variant === 'default' ? `Add • $${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}` : 'Add to Cart'}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
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
