import { RadioButton } from '~/components/design-system/RadioButton';
import { cn } from '~/utils/cn';

export function PurchaseOption({
  label,
  price,
  frequency,
  className,
  isSelected,
  onHandleSelect,
}: {
  label: string;
  price: number;
  frequency: string;
  className?: string;
  isSelected?: boolean;
  onHandleSelect?: () => void;
}) {
  return (
    <div
      className={cn(
        'bg-white flex flex-row gap-2 px-5 py-3 rounded-md',
        className,
      )}
      onClick={onHandleSelect}
    >
      <div>
        <RadioButton isSelected={isSelected} />
      </div>
      <div>
        <p className="text text-[#1B1F23] text-sm leading-[18px] mb-[6px]">
          {label}
        </p>
        <p className="text-[#1B1F23] font-medium text-sm leading-[14px] mb-[6px]">
          ${price.toFixed(2)}
        </p>
        <div className="flex flex-row gap-1 items-center">
          <p className="text-[#1B1F2399] text-sm leading-[14px] font-light">
            {frequency}
          </p>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"
              fill="black"
              fillOpacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
