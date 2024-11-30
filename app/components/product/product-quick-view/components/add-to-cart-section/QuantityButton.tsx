import { Minus, Plus } from 'lucide-react';

export interface QuantityButtonProps {
  disabled: boolean | undefined;
  ariaLabel: string;
  size?: number;
  onClick?: () => void;
  icon: 'plus' | 'minus';
}

export const QuantityButton = ({
  disabled,
  ariaLabel,
  onClick,
  icon,
  size = 14,
}: QuantityButtonProps) => (
  <button
    type="submit"
    className="text-[16px] text-[#1B1F23CC] flex items-center justify-center"
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {icon === 'plus' ? <Plus size={size} /> : <Minus size={size} />}
  </button>
);
