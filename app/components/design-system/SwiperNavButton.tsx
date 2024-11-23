import {ArrowLeft, ArrowRight} from 'lucide-react';
import {cn} from '~/utils/cn';

export const SwiperNavButton: React.FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}> = ({direction, onClick, className, disabled}) => {
  const isPrev = direction === 'prev';
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-10 h-10 flex items-center justify-center bg-[#F5F5F5] border border-black/10 rounded-[4px]',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      )}
      aria-label={isPrev ? 'Previous' : 'Next'}
      disabled={disabled}
    >
      {isPrev && <ArrowLeft size={14} color="#1B1F23" />}
      {!isPrev && <ArrowRight size={14} color="#1B1F23" />}
    </button>
  );
};
