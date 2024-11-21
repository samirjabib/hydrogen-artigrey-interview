import {useRouteLoaderData} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '~/providers/Aside';
import type {RootLoader} from '~/root';

import {ProductHeader} from './ProductHeader';
import {ProductVariantTable} from './product-variant-table/ProductVariantTable';
import {CartSummary} from './CartSummary';
import {PurchaseOption} from './PurshaseOption';
import {AddToCartSection} from './AddToCartSection';

export function PdpAside() {
  const data = useRouteLoaderData<RootLoader>('root');

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

  return (
    <Aside
      type="pdp"
      className="w-full max-w-[580px] md:px-10 overflow-y-scroll pt-6"
    >
      <Suspense fallback={<p>Loading pdp ...</p>}>
        <section className="w-full">
          <ProductHeader
            title="Magnesium L-Threonate"
            subtitle="Enhances the quality of sleep."
            reviewCount={120}
            tags={['Gmo Free', 'Gluten Free']}
            imageSrc="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/omega-3_31e57120-b358-4641-8494-2e98458b24d7.png?v=1732035059"
            imageAlt="Magnesium L-Threonate"
          />
          <div className="mt-10">
            <ProductVariantTable variants={variants} />

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
      </Suspense>
    </Aside>
  );
}
