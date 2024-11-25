import { CartForm, type OptimisticCartLine } from '@shopify/hydrogen';
import { QuantityCellProps } from '../../../types';
import { useToast } from '~/hooks/use-toast';
import { CartLineUpdateButton } from '~/components/cart/CartLineItem';

export const QuantityCell = ({
  variant,
  cartLine,
}: QuantityCellProps) => {
  const { toast } = useToast();

  const quantity = cartLine?.quantity || 0;



  const prevQuantity = Math.max(0, quantity - 1);
  const nextQuantity = quantity + 1;

  const removeLine = (lineId: string) => {
    return (
      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesRemove}
        inputs={{ lineIds: [lineId] }}
      >
        <button type="submit">Remove</button>
      </CartForm>
    );
  };

  return (
    <td className="px-5 w-[120px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-[14px] py-1 px-3 border rounded-md justify-center">
          <CartLineUpdateButton lines={[{ id: variant.id, quantity: prevQuantity }]}>
            <button
              className="text-[16px] text-[#1B1F23CC] disabled:opacity-50 hover:opacity-80 transition-opacity"
              aria-label="Decrease quantity"
/*               disabled={quantity <= 1}
 */              type="submit"
              onClick={() => toast({ title: "Quantity updated" })}
            >
              -
            </button>
          </CartLineUpdateButton>

          <span className="text-[10px] text-[#1B1F23CC] w-[20px] text-center">
            {quantity}
          </span>

          <CartLineUpdateButton lines={[{ id: variant.id, quantity: nextQuantity }]}>
            <button
              className="text-[16px] text-[#1B1F23CC] disabled:opacity-50 hover:opacity-80 transition-opacity"
              aria-label="Increase quantity"
              type="submit"
              onClick={() => toast({ title: "Quantity updated" })}
            >
              +
            </button>
          </CartLineUpdateButton>
        </div>

        {/*         <CartLineRemoveButton lineId={variant.id} />
 */}      </div>
    </td>
  );
};