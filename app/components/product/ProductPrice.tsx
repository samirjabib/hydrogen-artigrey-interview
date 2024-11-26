import { Money } from '@shopify/hydrogen';
import type { MoneyV2 } from '@shopify/hydrogen/storefront-api-types';
import { cn } from '~/utils/cn';

export function ProductPrice({
  price,
  compareAtPrice,
  className,
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
  className?: string;
}) {
  return (
    <div className={cn('text-[#1B1F23] font-medium text-sm leading-5', className)}>
      {compareAtPrice ? (
        <div>
          {price ? <Money data={price} /> : null}
          <s>
            <Money data={compareAtPrice} />
          </s>
        </div>
      ) : price ? (
        <Money data={price} />
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
