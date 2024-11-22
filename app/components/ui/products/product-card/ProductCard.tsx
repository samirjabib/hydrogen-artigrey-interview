import {cn} from '~/utils/cn';
import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';
import type {CollectionProductFragment} from 'storefrontapi.generated';

export type Variant = 'default' | 'gray';
export const ProductCard = ({
  product,
  variant = 'default',
}: {
  product: CollectionProductFragment;
  variant?: Variant;
}) => {
  const hasSellingPlans =
    product.sellingPlanGroups.nodes?.length > 0 &&
    product.sellingPlanGroups.nodes[0].sellingPlans.nodes.length > 0;

  return (
    <div
      className={cn(
        'rounded-lg pt-8',
        variant === 'gray' ? 'bg-[#F6F6F5]' : 'bg-white',
      )}
    >
      {hasSellingPlans ? (
        <ProductSubscriptionContent product={product}  variant={variant}/>
      ) : (
        <ProductContent product={product} variant={variant} />
      )}
    </div>
  );
};
