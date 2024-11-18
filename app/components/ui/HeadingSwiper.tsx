import {forwardRef} from 'react';
import {Heading} from './Heading';
import {SwiperNavButton} from './SwiperNavButton';
import {NavLink} from '@remix-run/react';
import {cn} from '~/utils/cn';

export type HeadingSwiperProps = {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  swiperRef: any;
  className?: string;
};

export const HeadingSwiper = forwardRef(
  ({className, swiperRef, ...props}: HeadingSwiperProps) => (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="flex items-center flex-row justify-center gap-12 mb-6">
        <SwiperNavButton
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Heading {...props} className="text-center" />
        <SwiperNavButton
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
      <div>
        <NavLink
          to="/trending-products"
          className="text underline text-[#1B1F23]"
        >
          View All
        </NavLink>
      </div>
    </div>
  ),
);
