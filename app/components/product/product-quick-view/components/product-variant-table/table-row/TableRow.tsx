import { ImageCell } from './ImageCell';
import { QuantityCell } from './QualityCell';
import { TableCell } from './TableCell';
import { TableRowProps } from '../../../types';
import { useProductPrice } from '~/hooks/useProductPrice';
import { useQuantityControl } from '~/hooks/useQuantityControl';
import { formatSize } from '../../../utils';




export const TableRow = ({ variant }: TableRowProps) => {
  const {
    quantity,
    updateQuantity,
    isMinQuantity,
    isMaxQuantity,
  } = useQuantityControl(1);

  const {
    total,
    discountPercentage,
    formattedUnitPrice,
  } = useProductPrice(variant.price.amount, quantity);

  const formattedSize = variant.metafield?.value ? formatSize(variant.metafield.value) : '';

  return (
    <tr key={variant.id}>
      <ImageCell
        name={variant.title}
        size={formattedSize}
      />
      <QuantityCell
        quantity={quantity}
        onQuantityChange={updateQuantity}
        isMinQuantity={isMinQuantity}
        isMaxQuantity={isMaxQuantity}
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
