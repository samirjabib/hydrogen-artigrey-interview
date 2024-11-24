import { forwardRef } from 'react';
import { SwiperNavButton } from '../../../design-system/SwiperNavButton';
import type { NavButtonsProps } from '../types';

export const NavButtonsMobile = forwardRef<HTMLDivElement, NavButtonsProps>(
  ({ isBeginning, isEnd, swiperRef }, ref) => (
    <div ref={ref} className="md:hidden flex flex-row items-center gap-2 justify-center mb-6">
      <SwiperNavButton
        direction="prev"
        onClick={() => swiperRef.current?.slidePrev()}
        className="z-10"
        disabled={isBeginning}
      />
      <SwiperNavButton
        direction="next"
        onClick={() => swiperRef.current?.slideNext()}
        className="z-10"
        disabled={isEnd}
      />
    </div>
  ),
);
