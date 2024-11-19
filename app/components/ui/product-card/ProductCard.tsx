import {Image} from '@shopify/hydrogen';
import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';
import {cn} from '~/utils/cn';
import type {
  CollectionProductFragment,
  ProductFragment,
} from 'storefrontapi.generated';

export const ProductCard = ({
  isSubscriptionProduct = false,
  product,
}: {
  isSubscriptionProduct?: boolean;
  product: CollectionProductFragment;
}) => {
  return (
    <div className="bg-white rounded-lg pt-8">
      <div
        className={cn(
          'flex items-center justify-center pb-[42px]',
          isSubscriptionProduct && 'pb-[18px]',
        )}
      >
        <Image src={product.images.nodes[0].url} height={300} width={300} />
      </div>
      {isSubscriptionProduct ? (
        <ProductSubscriptionContent />
      ) : (
        <ProductContent product={product} />
      )}
    </div>
  );
};
