
import { TableCell } from './TableCell';
import { TableRowProps } from '../../../types';
import { QuantityCell } from './QualityCell';
import { ImageCell } from './ImageCell';
import { useOptimisticCart } from '@shopify/hydrogen';


const formatSize = (size: string): string => {
  return size.replace(/[\[\]"]/g, '').trim();
};

export const TableRow = ({ variant, cart: originalCart, selectedSellingPlanId, selectedOption }: TableRowProps) => {

  const cart = useOptimisticCart(originalCart);



  const cartLine = cart?.lines?.nodes?.find(
    line => line.merchandise.id === variant.id
  );
  const totalAmount = cartLine?.cost.totalAmount?.amount || 0;


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
        selectedSellingPlanId={selectedSellingPlanId}
        selectedOption={selectedOption}
      />
      <TableCell className="text-center text-xs leading-[14px] text-[#30363C] w-[86px] whitespace-nowrap">
        ${variant.price.amount} / Each
      </TableCell>
      <TableCell className="font-normal text-xs leading-[14px] text-[#30363C] text-center px-[26px] w-[70px]">
        {0}%
      </TableCell>
      <TableCell className="text-end text-xs leading-[14px] text-[#30363C] w-[70px]">
        ${totalAmount}
      </TableCell>
    </tr>
  );
};
