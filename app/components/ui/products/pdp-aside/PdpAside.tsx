import {useRouteLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Aside} from '~/providers/Aside';
import type {RootLoader} from '~/root';
import type {RootLayoutProps} from '~/types';
import {Tag} from '../../Tag';
import {StarsRating} from '../../StarRatings';
import {cn} from '~/utils/cn';

const TableHead = ({headers}: {headers: {id: number; name: string}[]}) => (
  <thead>
    <tr className="border-b border-gray-200">
      {headers.map((item, index) => (
        <th
          key={item.id}
          className={cn(
            'font-medium text-[12px] leading-[14px] text-start pb-4',
            index === 0 ? 'text-start' : 'text-center',
            index === headers.length - 1 ? 'text-end' : 'text-start',
          )}
        >
          {item.name}
        </th>
      ))}
    </tr>
  </thead>
);

const ImageCell = ({name, size}: {name: string; size: string}) => (
  <td className="pt-4">
    <div className="flex flex-row gap-3 items-center">
      <div className="border rounded-md border-[#D0D0D0] flex items-center justify-center w-10 h-10">
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/omega-3_31e57120-b358-4641-8494-2e98458b24d7.png?v=1732035059"
          alt="image"
          width={25}
          height={25}
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-[10px] leading-3 text-[#1B1F23]">{name}</h4>
        <p className="text-normal text-[10px] leading-3 whitespace-nowrap">
          {size}
        </p>
      </div>
    </div>
  </td>
);

const QuantityCell = () => (
  <td className="px-5">
    <div className="flex items-center gap-[14px] py-2 px-3 border rounded-md justify-center">
      <button className="text-[16px] text-[#1B1F23CC]">-</button>
      <span className="text-[10px] text-[#1B1F23CC]">1</span>
      <button className="text-[16px] text-[#1B1F23CC]">+</button>
    </div>
  </td>
);

const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => <td className={className}>{children}</td>;

const TableRow = ({
  variant,
}: {
  variant: {
    name: string;
    price: string;
    discount: string;
    total: string;
    size: string;
  };
}) => (
  <tr key={variant.name}>
    <ImageCell name={variant.name} size={variant.size} />
    <QuantityCell />
    <TableCell className="text-center text-xs leading-[14px] text-[#30363C]">
      {variant.price} / Each
    </TableCell>
    <TableCell className="font-normal text-xs leading-[14px] text-[#30363C] text-center px-[26px]">
      {variant.discount}
    </TableCell>
    <TableCell className="text-end text-xs leading-[14px] text-[#30363C]">
      {variant.total}
    </TableCell>
  </tr>
);

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

  const tableHead = [
    {
      id: 1,
      name: 'Variant',
    },
    {
      id: 2,
      name: 'Quantity',
    },
    {
      id: 3,
      name: 'Price',
    },
    {
      id: 4,
      name: 'Discount',
    },
    {
      id: 5,
      name: 'Total',
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
          </div>
        </section>
      </Suspense>
    </Aside>
  );
}
