import {Image} from '@shopify/hydrogen';
import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';
import {cn} from '~/utils/cn';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {CollectionByHandleQuery} from 'storefrontapi.generated';

export const ProductCard = ({
  isSubscriptionProduct = false,
}: {
  isSubscriptionProduct?: boolean;
}) => {
  return (
    <div className="bg-white rounded-lg pt-8">
      <div
        className={cn(
          'flex items-center justify-center pb-[42px]',
          isSubscriptionProduct && 'pb-[18px]',
        )}
      >
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/whey-protein-isolate.png?v=1731971707"
          height={300}
          width={300}
        />
      </div>
      {isSubscriptionProduct ? (
        <ProductSubscriptionContent />
      ) : (
        <ProductContent />
      )}
    </div>
  );
};
