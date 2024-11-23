import { TotalItems } from './TotalItems';
import { SubtotalInformation } from './SubtotalInformation';
import { CartSummaryProps } from '../types';
import { Button } from '~/components/ui/Button';



export function CartSummary({ totalItems, subtotal }: CartSummaryProps) {
  return (
    <div
      className="flex flex-row items-center justify-between mt-6 mb-10"
      aria-label="Cart Summary"
    >
      <Button
        variant="outline"
        className="text-black py-2 px-3 text-[11px] leading-3"
        aria-label="View Cart"
      >
        View Cart
      </Button>
      <TotalItems totalItems={totalItems} />
      <SubtotalInformation subtotal={subtotal} />
    </div>
  );
}
