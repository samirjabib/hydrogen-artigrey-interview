import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const priceUtils = {
  parsePrice: (amount: string | undefined | null): number => {
    return amount ? parseFloat(amount) : 0;
  },

  calculateDiscount: (compareAtPrice: number, price: number): number => {
    if (!compareAtPrice || compareAtPrice <= price) {
      return 0;
    }
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return Math.round(discount);
  },

  formatDiscount: (discount: number): string => {
    return discount.toString();
  },

  formatCurrency: (amount: string): string => {
    return `$${amount}`;
  }
};