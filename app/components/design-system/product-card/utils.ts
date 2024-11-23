export const calculateDiscountedPrice = (
  price: number,
  adjustmentPercentage: number,
) => {
  return price - (price * adjustmentPercentage) / 100;
};
