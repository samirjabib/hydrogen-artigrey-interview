
import { TableCell } from './TableCell';
import { TableRowProps } from '../../../types';
import { useProductPrice } from '~/hooks/useProductPrice';
import { QuantityCell } from './QualityCell';
import { ImageCell } from './ImageCell';
import { useOptimisticCart } from '@shopify/hydrogen';


const formatSize = (size: string): string => {
  return size.replace(/[\[\]"]/g, '').trim();
};

export const TableRow = ({ variant, cart: originalCart }: TableRowProps) => {

  const cart = useOptimisticCart(originalCart);


  const {
    total,
    discountPercentage,
    formattedUnitPrice,
  } = useProductPrice(variant.price.amount, 2);

  const cartLine = cart?.lines?.nodes?.find(
    line => line.merchandise.id === variant.id
  );

  const formattedSize = variant.metafield?.value ? formatSize(variant.metafield.value) : '';

  return (
    <tr key={variant.id}>
      <ImageCell
        name={variant.title}
        size={formattedSize}
        imageSrc={variant.image?.url || ''}
      />
      <QuantityCell
        variant={variant}
        cartLine={cartLine}
      />
      <TableCell className="text-center text-xs leading-[14px] text-[#30363C] w-[120px]">
        {formattedUnitPrice} / Each
      </TableCell>
      <TableCell className="font-normal text-xs leading-[14px] text-[#30363C] text-center px-[26px] w-[100px]">
        {discountPercentage}%
      </TableCell>
      <TableCell className="text-end text-xs leading-[14px] text-[#30363C] w-[120px]">
        {total}
      </TableCell>
    </tr>
  );
};
