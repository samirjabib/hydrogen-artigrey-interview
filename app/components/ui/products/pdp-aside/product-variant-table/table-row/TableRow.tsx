import { CollectionProductFragment } from 'storefrontapi.generated';
import { ImageCell } from './ImageCell';
import { QuantityCell } from './QualityCell';
import { TableCell } from './TableCell';

export type VariantWithMetaField = CollectionProductFragment['variants']['nodes'][0] & {
  metafield: {
    key: string;
    value: string;
  };
};

type TableRowProps = {
  variant: VariantWithMetaField;
};

export const priceUtils = {
  parsePrice: (amount: string | undefined | null): number => {
    return amount ? parseFloat(amount) : 0;
  },

  calculateDiscount: (compareAtPrice: number, price: number): number => {
    if (!compareAtPrice || compareAtPrice <= price) {
      return 0;
    }
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return Math.round(discount);
  },

  formatDiscount: (discount: number): string => {
    return discount.toString();
  },

  formatCurrency: (amount: string): string => {
    return `$${amount}`;
  }
};

const formatSize = (size: string): string => {
  return size.replace(/[\[\]"]/g, '').trim();
};

export const TableRow = ({ variant }: TableRowProps): JSX.Element => {
  const price = priceUtils.parsePrice(variant.price.amount);
  const comparePrice = priceUtils.parsePrice(variant.compareAtPrice?.amount);
  const discount = priceUtils.calculateDiscount(comparePrice, price);
  const formattedDiscount = priceUtils.formatDiscount(discount);
  const formattedSize = variant.metafield?.value ? formatSize(variant.metafield.value) : '';

  return (
    <tr key={variant.id}>
      <ImageCell 
        name={variant.title} 
        size={formattedSize}
      />
      <QuantityCell />
      <TableCell className="text-center text-xs leading-[14px] text-[#30363C]">
        {priceUtils.formatCurrency(variant.price.amount)} / Each
      </TableCell>
      <TableCell className="font-normal text-xs leading-[14px] text-[#30363C] text-center px-[26px]">
        {formattedDiscount}%
      </TableCell>
      <TableCell className="text-end text-xs leading-[14px] text-[#30363C]">
        total
      </TableCell>
    </tr>
  );
};
