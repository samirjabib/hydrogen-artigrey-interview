import { cn } from '~/utils/cn';
import type { SelectOptions } from './types';
import { RadioButton } from '../RadioButton';

export const PurchaseOption = ({
  label,
  price,
  selectedOption,
  optionValue,
  handleOptionChange,
  adjustmentPercentage,
}: {
  label: string;
  price: number;
  selectedOption: SelectOptions;
  optionValue: SelectOptions;
  handleOptionChange: (option: SelectOptions) => void;
  adjustmentPercentage?: number;
}) => (
  <div
    className={cn(
      'flex flex-row gap-2 bg-[#F6F6F5] py-[10px] px-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 rounded-[4px] border min-h-[52px]',
      selectedOption === optionValue
        ? 'border-[#1B1F23]'
        : 'border border-[#EEEEEE]',
    )}
  >
    <RadioButton
      name="purchaseOption"
      value={optionValue}
      isSelected={selectedOption === optionValue}
      onChange={handleOptionChange}
    />
    <div className="flex flex-col justify-center">
      <h3 className="text-[10px] 2xl:text-[12px] font-normal leading-[14px] text-[#1B1F23] whitespace-nowrap">
        {label}
      </h3>
      <div className="flex flex-row gap-2 items-center flex-wrap">
        <p className="text-[12px] font-medium leading-[14px] text-[#1B1F23]">
          ${price.toFixed(2)}
        </p>
        {adjustmentPercentage && (
          <span className="text-[#802608] text-[10px] font-medium leading-3 whitespace-nowrap">
            Save {adjustmentPercentage}%
          </span>
        )}
      </div>
    </div>
  </div>
);
