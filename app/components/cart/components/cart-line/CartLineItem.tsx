import type { CartLineUpdateInput } from '@shopify/hydrogen/storefront-api-types';
import type { CartLayout } from '~/components/cart/components/CartMain';
import { CartForm, Image, type OptimisticCartLine } from '@shopify/hydrogen';
import { useVariantUrl } from '~/lib/variants';
import { Link } from '@remix-run/react';

import type { CartApiQueryFragment } from 'storefrontapi.generated';
import { ProductPrice } from '~/components/product/ProductPrice';
import { useAside } from '~/providers/Aside';
import { CartLineQuantity } from './CartLineQuantity';
import { isCompositeType } from 'graphql';
import { RotateCw } from 'lucide-react';

export type CartLine = OptimisticCartLine<
  CartApiQueryFragment
>;
/**
 * A single line item in the cart. It displays the product image, title, price.
 * It also provides controls to update the quantity or remove the line item.
 */
export function CartLineItem({
  layout,
  line,
}: {
  layout: CartLayout;
  line: CartLine;
}) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;

  /*   const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
    const { close } = useAside();
   */


  return (
    <li key={id} className="flex flex-row py-5">
      {image && (
        <div className='flex items-center justify-center'>
          <Image
            alt={title}
            className='object-cover'
            data={image}
            height={90}
            loading="lazy"
            width={90}
          />
        </div>

      )}

      <div className='w-full'>
        <div className='flex flex-row items-center justify-between mb-3'>
          <div className='flex flex-row gap-2 items-center'>
            <h3 className='text-sm font-medium leading-5 text-[#1B1F23]'>{product.title}</h3>
            <ul>
              {selectedOptions.map((option) => (
                <li key={option.name}>
                  <small className='text-[#30363C] text-[8px] font-medium leading-4'>
                    ({option.value})
                  </small>
                </li>
              ))}
            </ul>
          </div>
          <ProductPrice price={line?.cost?.totalAmount} />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <CartLineQuantity line={line} />
          <div className='flex border border-dashed border-black/20 flex-row items-center py-2 px-4 rounded-[6px] justify-center w-auto gap-2'>
            <RotateCw size={14} color='#0E0804B2' />
            <p className='text-xs leading-4 text-[#1B1F23]/70 font-normal'>Subscribe & Save 10%</p>
          </div>
        </div>
      </div>
    </li >
  );
}
