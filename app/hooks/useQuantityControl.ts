import { useState, useCallback } from 'react';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 20;

export const useQuantityControl = (initialQuantity: number = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = useCallback(() => {
    setQuantity(prev => prev < MAX_QUANTITY ? prev + 1 : prev);
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => prev > MIN_QUANTITY ? prev - 1 : prev);
  }, []);

  const updateQuantity = useCallback((newQuantity: number) => {
    if (newQuantity >= MIN_QUANTITY && newQuantity <= MAX_QUANTITY) {
      setQuantity(newQuantity);
    }
  }, []);

  return {
    quantity,
    increment,
    decrement,
    updateQuantity,
    isMinQuantity: quantity <= MIN_QUANTITY,
    isMaxQuantity: quantity >= MAX_QUANTITY,
  };
};
