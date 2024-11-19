import {Image} from '@shopify/hydrogen';
import {ProductContent} from './ProductContent';
import {ProductSubscriptionContent} from './ProductSubscriptionContent';

export const ProductCard = ({
  isSubscriptionProduct = false,
}: {
  isSubscriptionProduct?: boolean;
}) => {
  return (
    <div className="bg-white rounded-lg pt-8">
      <div className="flex items-center justify-center pb-11">
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
