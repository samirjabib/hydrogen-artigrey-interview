
import { ProductPrice } from '~/components/product/ProductPrice';
import { CartLineQuantity } from './CartLineQuantity';
import { CartLineProps, ExtendedProduct } from '../../types';
import { ProductImage } from './ProductImage';
import { ProductOptions } from './ProductOptions';
import { SubscriptionToggle } from './SubscriptionToggle';





export function CartLineItem({ line }: { line: CartLineProps }) {
  const { merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const typedProduct = product as ExtendedProduct;

  const sellingPlan = typedProduct.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.nodes[0];

  return (
    <li className="flex flex-col sm:flex-row gap-4 py-5 bg-white p-4 rounded-lg">
      {image && <ProductImage image={image} title={title} />}

      <div className='w-full'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2'>
          <div className='flex flex-row gap-2 items-center'>
            <h3 className='text-sm font-medium leading-5 text-[#1B1F23]'>{typedProduct.title}</h3>
            <ProductOptions options={selectedOptions} />
          </div>
          <div className="hidden sm:block">
            <ProductPrice price={line?.cost?.totalAmount} />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div className="flex flex-row items-center justify-between w-full sm:w-auto">
            <CartLineQuantity line={line} />
            <div className="block sm:hidden">
              <ProductPrice price={line?.cost?.totalAmount} />
            </div>
          </div>

          {sellingPlan && <SubscriptionToggle line={line} sellingPlan={sellingPlan} />}
        </div>
      </div>
    </li>
  );
}