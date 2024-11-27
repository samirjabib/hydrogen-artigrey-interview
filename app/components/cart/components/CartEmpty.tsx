import type { CartMainProps } from './CartMain';
import { ShoppingBag } from 'lucide-react';

export function CartEmpty({ }: {
  layout?: CartMainProps['layout'];
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-[#F6F6F5] rounded-full p-6 mb-6 shadow-sm">
        <ShoppingBag size={32} className="text-[#1B1F23] opacity-80" />
      </div>
      <div className="max-w-[280px] text-center">
        <h2 className="text-[#1B1F23] text-xl font-medium mb-2">Your cart is empty</h2>
        <p className="text-[#1B1F23]/70 text-base font-normal leading-6">
          Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you started!
        </p>
      </div>
    </div>
  );
}
