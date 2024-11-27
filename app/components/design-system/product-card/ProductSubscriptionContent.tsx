import { Image } from '@shopify/hydrogen';
import type { CollectionProductFragment } from 'storefrontapi.generated';
import { cn } from '~/utils/cn';

import { useSubscription } from './hooks';
import { NavLink } from '@remix-run/react';
import { PurchaseOption } from './PurshaseOption';
import { Variant } from './ProductCard';
import { BestSellerTag } from '../BestSellerTag';
import { ButtonQuickView } from '~/components/product/product-quick-view/components/ButtonQuickView';

export const ProductSubscriptionContent = ({
  product,
  variant
}: {
  product: CollectionProductFragment & { isBestSeller?: boolean };
  variant?: Variant;
}) => {


  const { priceRange: { minVariantPrice: { amount: price } }, images, sellingPlanGroups, isBestSeller } = product;


  const {
    selectedOption,
    onOptionChange,
    parsedPrice,
    discountedPrice,
    adjustmentPercentage,
  } = useSubscription(price, sellingPlanGroups);


  const isProductWithSellingPlanGroups = sellingPlanGroups.nodes.length > 0;
  const buttonLabel = variant === 'default' ? `Add • $${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}` : 'Add to Cart'


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
        {isBestSeller && (
          <BestSellerTag />
        )}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex flex-row px-4 gap-2">
            <PurchaseOption
              label="One-Time Purchase"
              price={parsedPrice}
              selectedOption={selectedOption}
              onOptionChange={onOptionChange}
              isSelected={selectedOption === null}
            />
            <PurchaseOption
              label="Subscribe & Save"
              price={discountedPrice}
              selectedOption={selectedOption}
              onOptionChange={onOptionChange}
              isSelected={selectedOption !== null}
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
        <ButtonQuickView isProductWithSellingPlanGroups={isProductWithSellingPlanGroups} product={product} buttonLabel={buttonLabel} selectedSellingPlanId={selectedOption} />
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
