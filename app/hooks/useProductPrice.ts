import { useMemo } from 'react';

export const useProductPrice = (price: string, quantity: number) => {
  const parsePrice = (amount: string | undefined | null): number => {
    return amount ? parseFloat(amount) : 0;
  };

  const getDiscountPercentage = (qty: number): number => {
    if (qty >= 15) return 15;
    if (qty >= 10) return 10;
    if (qty >= 5) return 5;
    return 0;
  };

  const formatCurrency = (amount: string | number): string => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);
  };

  const calculateTotal = useMemo(() => {
    const basePrice = parsePrice(price);
    const subtotal = basePrice * quantity;
    const discountPercentage = getDiscountPercentage(quantity);
    const discountAmount = (subtotal * discountPercentage) / 100;
    return formatCurrency(subtotal - discountAmount);
  }, [price, quantity]);

  const discountPercentage = useMemo(() => 
    getDiscountPercentage(quantity),
    [quantity]
  );

  const formattedUnitPrice = useMemo(() => 
    formatCurrency(price),
    [price]
  );

  return {
    total: calculateTotal,
    discountPercentage,
    formattedUnitPrice,
  };
};
