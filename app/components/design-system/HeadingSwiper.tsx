import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { forwardRef } from 'react';
import { Heading } from './Heading';
import { SwiperNavButton } from './SwiperNavButton';
import { NavLink } from '@remix-run/react';
import { cn } from '~/utils/cn';

export type HeadingSwiperProps = {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  swiperRef: any;
  isEnd: boolean;
  isBeginning: boolean;
  className?: string;
};

export const HeadingSwiper: ForwardRefExoticComponent<
  RefAttributes<HTMLDivElement> & HeadingSwiperProps
> = forwardRef(
  (
    { isEnd, isBeginning, className, swiperRef, ...props }: HeadingSwiperProps,
    ref,
  ) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-center', className)}
      role="region"
      aria-label="Trending products"
    >
      <div className="flex items-center flex-row justify-center px-4 sm:gap-12 mb-4 md:mb-6">
        <SwiperNavButton
          direction="prev"
          className="hidden sm:flex"
          aria-label="Previous product"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Heading {...props} className="text-center" />
        <SwiperNavButton
          direction="next"
          className="hidden sm:flex"
          aria-label="Next product"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
      <div
        className="flex sm:hidden flex-row gap-4 mb-8 md:mb-12 items-center"
        role="navigation"
        aria-label="Previous and next product navigation"
      >
        <SwiperNavButton
          direction="prev"
          aria-label="Previous product"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <SwiperNavButton
          direction="next"
          aria-label="Next product"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      <div>
        <NavLink
          to="/trending-products"
          className="text underline text-[#1B1F23]"
          aria-label="View all trending products"
        >
          View All
        </NavLink>
      </div>
    </div>
  ),
);
