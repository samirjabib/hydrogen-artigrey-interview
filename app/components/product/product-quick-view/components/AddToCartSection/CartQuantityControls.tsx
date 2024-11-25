import { AddToCartButton } from '../../../AddToCartButton';
import { CartLineUpdateButton } from '~/components/cart/CartLineItem';
import { QuantityButton } from './QuantityButton';
import { toast } from '~/hooks/use-toast';
import { CartQuantityControlsProps } from '../../types';


export const CartQuantityControls = ({
  cartLine,
  quantity,
  merchandiseId,
}: CartQuantityControlsProps) => {
  const prevQuantity = Math.max(0, quantity - 1);
  const nextQuantity = quantity + 1;

  const handleAddToCart = () => {
    toast({ title: "Product added to cart" });
  };

  const renderDecreaseButton = () => {
    if (cartLine) {
      return (
        <CartLineUpdateButton lines={[{ id: cartLine.id, quantity: prevQuantity }]}>
          <QuantityButton
            disabled={quantity <= 0 || cartLine.isOptimistic}
            ariaLabel="Decrease quantity"
            icon="minus"
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
          />
        </CartLineUpdateButton>
      );
    }

    return (
      <AddToCartButton
        lines={[{ merchandiseId, quantity: 1 }]}
        onClick={handleAddToCart}
      >
        <QuantityButton
          disabled={false}
          ariaLabel="Add to cart"
          icon="plus"
        />
      </AddToCartButton>
    );
  };

  return (
    <div className="flex items-center gap-[26px] py-3 px-3 border rounded-md justify-center bg-white">
      {renderDecreaseButton()}
      <span className="text-[10px] text-[#1B1F23CC]">{quantity}</span>
      {renderIncreaseButton()}
    </div>
  );
};
