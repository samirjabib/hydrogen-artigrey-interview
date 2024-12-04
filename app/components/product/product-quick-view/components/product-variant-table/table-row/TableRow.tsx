import { TableCell } from './TableCell';
import { TableRowProps } from '../../../types';
import { QuantityCell } from './QualityCell';
import { ImageCell } from './ImageCell';
import { useOptimisticCart } from '@shopify/hydrogen';

const formatSize = (size: string): string => {
  return size.replace(/[\[\]"]/g, '').trim();
};

const calculateDiscount = (quantity: number): number => {
  if (quantity >= 15) return 15;
  if (quantity >= 10) return 10;
  if (quantity >= 5) return 5;
  return 0;
};

const calculateDiscountedAmount = (amount: number, quantity: number): number => {
  const discount = calculateDiscount(quantity);
  const discountMultiplier = (100 - discount) / 100;
  return amount * discountMultiplier;
};

export const TableRow = ({ variant, cart: originalCart, selectedSellingPlanId, selectedOption }: TableRowProps) => {
  const cart = useOptimisticCart(originalCart);

  const cartLine = cart?.lines?.nodes?.find(
    line => line.merchandise.id === variant.id
  );

  const quantity = cartLine?.quantity || 0;
  const baseAmount = cartLine?.cost.totalAmount?.amount || 0;
  const discount = calculateDiscount(quantity);
  const totalAmount = calculateDiscountedAmount(Number(baseAmount), quantity);
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
        {discount}%
      </TableCell>
      <TableCell className="text-end text-xs leading-[14px] text-[#30363C] w-[70px]">
        ${totalAmount.toFixed(2)}
      </TableCell>
    </tr>
  );
};