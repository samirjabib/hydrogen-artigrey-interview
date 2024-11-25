import { CartForm } from '@shopify/hydrogen';
import { QuantityCellProps } from '../../../types';
import { useToast } from '~/hooks/use-toast';
import { CartLineUpdateButton } from '~/components/cart/CartLineItem';
import { QuantityButton } from '../../AddToCartSection/QuantityButton';

export const QuantityCell = ({
  variant,
  cartLine,
}: QuantityCellProps) => {
  const { toast } = useToast();

  if (!cartLine && !variant) return null;

  const quantity = cartLine?.quantity || 0;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  const handleQuantityUpdate = () => {
    toast({ title: "Quantity updated" });
  };

  const renderDecreaseButton = () => {
    if (cartLine) {
      return (
        <CartLineUpdateButton lines={[{ id: cartLine.id, quantity: prevQuantity }]}>
          <QuantityButton
            disabled={quantity <= 1 || cartLine.isOptimistic}
            ariaLabel="Decrease quantity"
            icon="minus"
            onClick={handleQuantityUpdate}
          />
        </CartLineUpdateButton>
      );
    }

    return (
      <QuantityButton
        disabled={true}
        ariaLabel="Decrease quantity"
        icon="minus"
      />
    );
  };

  const renderIncreaseButton = () => {
    if (cartLine) {
      return (
        <CartLineUpdateButton lines={[{ id: cartLine.id, quantity: nextQuantity }]}>
          <QuantityButton
            disabled={cartLine.isOptimistic}
            ariaLabel="Increase quantity"
            icon="plus"
            onClick={handleQuantityUpdate}
          />
        </CartLineUpdateButton>
      );
    }

    return (
      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesAdd}
        inputs={{
          lines: [{
            merchandiseId: variant.id,
            quantity: 1
          }]
        }}
      >
        <QuantityButton
          disabled={false}
          ariaLabel="Add to cart"
          icon="plus"
          onClick={handleQuantityUpdate}
        />
      </CartForm>
    );
  };

  return (
    <td className="px-5 w-[120px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-[14px] py-1 px-3 border rounded-md justify-center">
          {renderDecreaseButton()}
          <span className="text-[10px] text-[#1B1F23CC] w-[20px] text-center">
            {quantity}
          </span>
          {renderIncreaseButton()}
        </div>
      </div>
    </td>
  );
};