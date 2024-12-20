import type { ExtendedProduct } from '~/types/product';

import { cn } from '~/utils/cn';
import { Image } from '@shopify/hydrogen';
import { StarsRating } from '../StarRatings';
import { Tag } from '../Tag';
import type { Variant } from './ProductCard';
import { BestSellerTag } from '../BestSellerTag';
import { ButtonQuickView } from '~/components/product/product-quick-view/components/ButtonQuickView';

export const ProductContent = ({
  product,
  variant = 'default',
}: {
  product: ExtendedProduct;
  variant?: Variant;
}) => {

  const { images, title, description, tags, isBestSeller } = product;

  const isProductWithSellingPlanGroups = product.sellingPlanGroups.nodes.length > 0;
  const buttonLabel = variant === 'default' ? `Add • $${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}` : 'Add to Cart'

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-center pb-[42px] relative mb-4',
        )}
      >
        <Image
          src={images.nodes[0].url}
          height={300}
          width={300}
          className="object-contain"
        />
        {isBestSeller && (
          <BestSellerTag />
        )}
        <div className="absolute bottom-0 left-0">
          <div className="px-4 flex flex-row items-center gap-1">
            {tags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                variant={variant === 'gray' ? 'white' : 'gray'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-5">
        <h3 className="text font-medium text-[#1B1F23] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h3>
        <p className="text-[13px] leading-4 text-[#1B1F23B2] mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {description}
        </p>
        <div className="flex flex-row items-center justify-between pb-5">
          <StarsRating isProductRating size={12} />
          <ButtonQuickView isProductWithSellingPlanGroups={isProductWithSellingPlanGroups} buttonLabel={buttonLabel} variantButton={variant} product={product} />
        </div>
      </div>
    </div>
  );
};
