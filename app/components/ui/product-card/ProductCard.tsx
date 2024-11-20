import type {CollectionProductFragment} from 'storefrontapi.generated';
import {ProductSubscriptionContent} from '../products/product-card/ProductSubscriptionContent';
import {ProductContent} from '../products/product-card/ProductContent';

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
