import { Minus, Plus } from 'lucide-react';

export interface QuantityButtonProps {
  disabled: boolean | undefined;
  ariaLabel: string;
  onClick?: () => void;
  icon: 'plus' | 'minus';
}

export const QuantityButton = ({
  disabled,
  ariaLabel,
  onClick,
  icon
}: QuantityButtonProps) => (
  <button
    className="text-[16px] text-[#1B1F23CC]"
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {icon === 'plus' ? <Plus size={14} /> : <Minus size={14} />}
  </button>
);
