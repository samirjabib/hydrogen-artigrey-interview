import type {VariantProps} from 'class-variance-authority';
import {cva} from 'class-variance-authority';
import type {ButtonHTMLAttributes} from 'react';
import {forwardRef} from 'react';
import {cn} from '~/utils/cn';

// Define las clases usando cva
const buttonVariants = cva(
  'inline-flex items-center font-medium text-sm justify-center px-7 py-[14px] font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-[#1B1F23] text-white',
        secondary:
          'bg-white text-[#1B1F23] hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-200',
        terciary: 'bg-[#E4E4E4] text-[#1B1F23] ',
        ghost: 'bg-transparent',
        outline: 'border border-[#AAAAAA] bg-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

/**
 * Botón reutilizable con variantes y estilos abiertos.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, className, children, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({variant, className}))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
