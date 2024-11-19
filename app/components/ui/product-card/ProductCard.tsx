import {Image} from '@shopify/hydrogen';
import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';
import {cn} from '~/utils/cn';
import type {
  CollectionProductFragment,
  ProductFragment,
} from 'storefrontapi.generated';
import {Tag} from '../Tag';

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
          'flex items-center justify-center pb-[42px] relative mb-4',
          isSubscriptionProduct && 'pb-[18px]',
        )}
      >
        <Image
          src={product.images.nodes[0].url}
          height={300}
          width={300}
          className="object-contain"
        />

        <div className="absolute bottom-0 left-0">
          <div className="px-4 flex flex-row items-center gap-1">
            {product.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
      {isSubscriptionProduct ? (
        <ProductSubscriptionContent />
      ) : (
        <ProductContent product={product} />
      )}
    </div>
  );
};
