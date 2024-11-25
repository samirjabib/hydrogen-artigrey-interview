import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { AddToCartButton } from '../../AddToCartButton';
import { AddToCartSectionProps } from '../types';
import { useToast } from '~/hooks/use-toast';
import { useOptimisticCart } from '@shopify/hydrogen';


export function AddToCartSection({
  initialQuantity = 1,
  price,
  product,
  cart: originalCart,
  onQuantityChange,
}: AddToCartSectionProps) {
  if (!product) {
    return null;
  }

  console.log(originalCart, 'cart on AddToCartSection');

  console.log(product.variants.nodes[0].id, 'product.variants.nodes[0].id');
  const cart = useOptimisticCart(originalCart);

  const cartLine = cart?.lines?.nodes?.find(
    line => line.merchandise.id === product.variants.nodes[0].id
  );

  console.log(cartLine, 'cartLine on AddToCartSection');

  const quantity = cartLine?.quantity || 0;

  /*   const [quantity, setQuantity] = useState(initialQuantity); */
  const { toast } = useToast()




  /* 
    const handleQuantityChange = (newQuantity: number) => {
      if (newQuantity >= 1) {
        setQuantity(newQuantity);
        onQuantityChange?.(newQuantity);
      }
    };
   */


  return (
    <AddToCartButton lines={[{ merchandiseId: product?.variants.nodes[0].id, quantity }]} onClick={() => toast({ title: "Product added to cart", })}>
      <div className="bg-black flex flex-row items-center px-[6px] py-[6px] rounded-lg gap-10 md:gap-[100px] w-full">
        <div className="flex items-center gap-[26px] py-3 px-3 border rounded-md justify-center bg-white">
          <button
            className="text-[16px] text-[#1B1F23CC]"
/*             onClick={() => handleQuantityChange(quantity - 1)}
 */          >
            <Minus size={14} />
          </button>
          <span className="text-[10px] text-[#1B1F23CC]">{quantity}</span>
          <button
            className="text-[16px] text-[#1B1F23CC]"
/*             onClick={() => handleQuantityChange(quantity + 1)}
 */          >
            <Plus size={14} />
          </button>
        </div>
        <div
          aria-label="Add to Cart"
          role="button"
          tabIndex={0}
          className="text-white text-base leading-[18px] font-medium cursor-pointer"
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
    </AddToCartButton>
  );
}
