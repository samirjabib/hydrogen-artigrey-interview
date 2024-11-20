import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';
import type {CollectionProductFragment} from 'storefrontapi.generated';

export const ProductCard = ({
  product,
}: {
  product: CollectionProductFragment;
}) => {
  const hasSellingPlans =
    product.sellingPlanGroups.nodes?.length > 0 &&
    product.sellingPlanGroups.nodes[0].sellingPlans.nodes.length > 0;

  return (
    <div className="bg-white rounded-lg pt-8">
      {hasSellingPlans ? (
        <ProductSubscriptionContent product={product} />
      ) : (
        <ProductContent product={product} />
      )}
    </div>
  );
};
