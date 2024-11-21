import {useState} from 'react';
import {Button} from '../../Button';
import {Minus, Plus} from 'lucide-react';

interface AddToCartSectionProps {
  initialQuantity?: number;
  price: number;
  onQuantityChange?: (quantity: number) => void;
  onAddToCart?: () => void;
}

export function AddToCartSection({
  initialQuantity = 1,
  price,
  onQuantityChange,
  onAddToCart,
}: AddToCartSectionProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  return (
    <>
      <div className="bg-black flex flex-row items-center px-[6px] py-[6px] rounded-lg gap-10 md:gap-[100px]">
        <div className="flex items-center gap-[26px] py-3 px-3 border rounded-md justify-center bg-white">
          <button
            className="text-[16px] text-[#1B1F23CC]"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            <Minus size={14} />
          </button>
          <span className="text-[10px] text-[#1B1F23CC]">{quantity}</span>
          <button
            className="text-[16px] text-[#1B1F23CC]"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            <Plus size={14} />
          </button>
        </div>
        <div
          role="button"
          className="text-white text-base leading-[18px] font-medium cursor-pointer"
          onClick={onAddToCart}
        >
          Add to Cart - ${(price * quantity).toFixed(2)}
        </div>
      </div>
      <Button
        variant="ghost"
        className="text-center w-full pt-5 pb-10"
        onClick={() => {
          /* Handle view full details */
        }}
      >
        View Full Details
      </Button>
    </>
  );
}
