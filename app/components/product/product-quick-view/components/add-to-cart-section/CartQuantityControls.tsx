import { AddToCartButton } from '../../../AddToCartButton';
import { QuantityButton } from './QuantityButton';
import { toast } from '~/hooks/use-toast';
import { CartQuantityControlsProps } from '../../types';
import { CartLineUpdateButton } from '~/components/cart/components/cart-line/CartLineUpdateButton';

export const CartQuantityControls = ({
  cartLine,
  quantity,
  merchandiseId,
  selectedOption,
  selectedSellingPlanId,
}: CartQuantityControlsProps) => {
  const prevQuantity = Math.max(0, quantity - 1);
  const nextQuantity = quantity + 1;

  const handleAddToCart = () => {
    toast({ title: "Product added to cart" });
  };

  const buttonClasses = "min-w-[24px] max-w-[24px] h-[24px] flex items-center justify-center";
  const buttonWrapperClasses = "flex items-center justify-center h-full";

  const renderDecreaseButton = () => {
    if (cartLine) {
      return (
        <CartLineUpdateButton lines={[{ id: cartLine.id, quantity: prevQuantity }]}>
          <div className={buttonClasses}>
            <QuantityButton
              disabled={quantity <= 0 || cartLine.isOptimistic}
              ariaLabel="Decrease quantity"
              icon="minus"
            />
          </div>
        </CartLineUpdateButton>
      );
    }

    return (
      <div className={buttonClasses}>
        <QuantityButton
          disabled={true}
          ariaLabel="Decrease quantity"
          icon="minus"
        />
      </div>
    );
  };

  const renderIncreaseButton = () => {
    if (cartLine) {
      return (
        <CartLineUpdateButton lines={[{ id: cartLine.id, quantity: nextQuantity }]}>
          <div className={buttonClasses}>
            <QuantityButton
              disabled={cartLine.isOptimistic}
              ariaLabel="Increase quantity"
              icon="plus"
            />
          </div>
        </CartLineUpdateButton>
      );
    }

    return (
      <AddToCartButton
        lines={[{
          merchandiseId,
          quantity: 1,
          sellingPlanId: selectedOption === selectedSellingPlanId ? selectedSellingPlanId : null
        }]}
        onClick={handleAddToCart}
        className={buttonWrapperClasses}
      >
        <div className={buttonClasses}>
          <QuantityButton
            disabled={false}
            ariaLabel="Add to cart"
            icon="plus"
          />
        </div>
      </AddToCartButton>
    );
  };

  return (
    <div className="flex items-center gap-[14px] px-3 border rounded-md justify-center bg-white h-[50px] w-[140px]">
      {renderDecreaseButton()}
      <p className="text-[10px] text-[#1B1F23CC] min-w-[20px] text-center">{quantity}</p>
      {renderIncreaseButton()}
    </div>
  );
};
