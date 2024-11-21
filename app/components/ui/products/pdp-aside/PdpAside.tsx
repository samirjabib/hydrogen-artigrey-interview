import {useRouteLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Aside} from '~/providers/Aside';
import type {RootLoader} from '~/root';
import type {RootLayoutProps} from '~/types';
import {Tag} from '../../Tag';
import {StarsRating} from '../../StarRatings';
import {TableHead} from './TableHead';
import {TableRow} from './table-row/TableRow';
import {tableHead} from './constants';
import {Button} from '../../Button';
import Cart from '../../../../routes/cart';
import {TotalItems} from './TotalItems';
import {SubtotalInformation} from './SubtotalInformation';

export function PdpAside({cart}: {cart: RootLayoutProps['cart']}) {
  const data = useRouteLoaderData<RootLoader>('root');

  const variants = [
    {
      name: 'Small',
      price: '$49.95a',
      discount: '0%',
      total: '$00.00',
      size: '30 Capsulas',
    },
    {
      name: 'Medium',
      size: '60 Capsulas',
      price: '$49.95',
      discount: '5%',
      total: '$249.95',
    },
    {
      name: 'Large',
      size: '90 Capsulas',
      price: '$49.95',
      discount: '5%',
      total: '$249.95',
    },
  ];

  return (
    <Aside type="pdp" className="w-full max-w-[580px] px-4 md:px-10">
      <Suspense fallback={<p>Loading pdp ...</p>}>
        <section className="w-full">
          <div className="flex justify-center pb-10">
            <Image
              src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/omega-3_31e57120-b358-4641-8494-2e98458b24d7.png?v=1732035059"
              alt="product"
              width={300}
              height={300}
            />
          </div>
          <h3 className="font-medium text-[26px] leading-[31px] text-[#1B1F23] mb-2">
            Magnesium L-Threonate
          </h3>
          <p className="text-[#1B1F23]/70 text-sm leading-4 font-normal mb-5">
            Enhances the quality of sleep.
          </p>
          <div className="flex flex-row items-center justify-between  mb-5">
            <div className="flex flex-row items-center gap-[6px]">
              {['Gmo Free', 'Gluten Free'].map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
            <StarsRating isProductRating size={16} />
          </div>
          <div className="mt-10">
            <table className="w-full">
              <TableHead headers={tableHead} />
              <tbody>
                {variants.map((variant) => (
                  <TableRow key={variant.name} variant={variant} />
                ))}
              </tbody>
            </table>
            <div
              className="flex flex-row items-center justify-between mt-6"
              aria-label="Cart Summary"
            >
              <Button
                variant="outline"
                className="text-black py-2 px-3 text-[11px] leading-3"
                aria-label="View Cart"
              >
                View Cart
              </Button>
              <TotalItems totalItems={20} />
              <SubtotalInformation subtotal={249.95} />
            </div>
          </div>
        </section>
      </Suspense>
    </Aside>
  );
}
