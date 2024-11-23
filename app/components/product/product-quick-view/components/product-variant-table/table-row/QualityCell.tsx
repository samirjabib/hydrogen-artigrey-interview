import { QuantityCellProps } from "../../../types";

export const QuantityCell = ({ 
  quantity, 
  onQuantityChange,
  isMinQuantity,
  isMaxQuantity,
}: QuantityCellProps) => {
  const handleDecrease = () => {
    if (!isMinQuantity) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (!isMaxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <td className="px-5 w-[120px]">
      <div className="flex items-center gap-[14px] py-1 px-3 border rounded-md justify-center">
        <button 
          className="text-[16px] text-[#1B1F23CC] disabled:opacity-50 hover:opacity-80 transition-opacity" 
          onClick={handleDecrease}
          disabled={isMinQuantity}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-[10px] text-[#1B1F23CC] w-[20px] text-center">
          {quantity}
        </span>
        <button 
          className="text-[16px] text-[#1B1F23CC] disabled:opacity-50 hover:opacity-80 transition-opacity" 
          onClick={handleIncrease}
          disabled={isMaxQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </td>
  );
};
