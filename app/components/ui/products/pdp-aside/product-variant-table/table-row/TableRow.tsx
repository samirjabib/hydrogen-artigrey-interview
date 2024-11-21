import {ImageCell} from './ImageCell';
import {QuantityCell} from './QualityCell';
import {TableCell} from './TableCell';

export const TableRow = ({
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
  <tr key={variant.name} className="">
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
