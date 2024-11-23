import { Image } from '@shopify/hydrogen';
import type { CollectionProductFragment } from 'storefrontapi.generated';
import { cn } from '~/utils/cn';

import { useSubscription } from './hooks';
import { NavLink } from '@remix-run/react';
import { PurchaseOption } from './PurshaseOption';
import { Variant } from './ProductCard';
import { ProductsQuickView } from '../product-quick-view/ProductsQuickView';

export const ProductSubscriptionContent = ({
  product,
  variant
}: {
  product: CollectionProductFragment;
  variant?: Variant;
}) => {


  const { priceRange: { minVariantPrice: { amount: price } }, images, sellingPlanGroups } = product;


  const {
    selectedOption,
    handleOptionChange,
    parsedPrice,
    discountedPrice,
    adjustmentPercentage,
  } = useSubscription(price, sellingPlanGroups);

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-center pb-[42px] relative mb-4',
        )}
      >
        <Image
          src={images.nodes[0]?.url}
          height={300}
          width={300}
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex flex-row px-4 gap-2">
            <PurchaseOption
              label="One-Time Purchase"
              price={parsedPrice}
              selectedOption={selectedOption}
              optionValue="oneTime"
              handleOptionChange={handleOptionChange}
            />
            <PurchaseOption
              label="Subscribe & Save"
              price={discountedPrice}
              selectedOption={selectedOption}
              optionValue="subscribe"
              handleOptionChange={handleOptionChange}
              adjustmentPercentage={adjustmentPercentage?.adjustmentPercentage}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col px-5"
        role="radiogroup"
        aria-label="Purchase options"
      >
        <ProductsQuickView product={product} variant={variant} />

        <NavLink
          to="/"
          className="text-[12px] leading-[14px] font-normal py-[17px] flex items-center justify-center"
        >
          View Full Details
        </NavLink>
      </div>
    </div>
  );
};
