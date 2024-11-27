import { PriceDisplayProps } from "../../types";

export const PriceDisplay = ({ price = "0.00" }: PriceDisplayProps) => {
  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div className="text-white min-w-[150px]  leading-[18px] font-medium whitespace-nowrap sm:text-base text-sm">
      {`Add to Cart - $${formattedPrice}`}
    </div>
  );
};
