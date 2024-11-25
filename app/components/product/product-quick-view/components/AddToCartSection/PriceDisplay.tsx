import { PriceDisplayProps } from "../../types";


export const PriceDisplay = ({ price = "0.00" }: PriceDisplayProps) => (
  <div className="text-white text-base leading-[18px] font-medium">
    {`Add to Cart - $${price}`}
  </div>
);
