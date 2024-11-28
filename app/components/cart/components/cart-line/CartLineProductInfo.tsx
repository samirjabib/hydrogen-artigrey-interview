import { Link } from '@remix-run/react';
import { useVariantUrl } from '~/lib/variants';
import { ProductPrice } from '../../../product/ProductPrice';
import { useAside } from '../../../../providers/Aside';
import { CartLineProductInfoProps } from '../../types';



export function CartLineProductInfo({ line, layout }: CartLineProductInfoProps) {
  const { merchandise } = line;
  const { product, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const { close } = useAside();

  return (
    <>
      <Link
        prefetch="intent"
        to={lineItemUrl}
        onClick={() => {
          if (layout === 'aside') {
            close();
          }
        }}
      >
        <p>
          <strong>{product.title}</strong>
        </p>
      </Link>
      <ProductPrice price={line?.cost?.totalAmount} />
      <ul>
        {selectedOptions.map((option) => (
          <li key={option.name}>
            <small>
              {option.name}: {option.value}
            </small>
          </li>
        ))}
      </ul>
    </>
  );
}
