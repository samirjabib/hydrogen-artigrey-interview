import {forwardRef} from 'react';
import {SwiperNavButton} from '../../ui/SwiperNavButton';
import type {NavButtonsProps} from './types';

export const NavButtonsMobile = forwardRef(
  ({isBeginning, isEnd, swiperRef}: NavButtonsProps) => (
    <div className="md:hidden flex flex-row items-center gap-2 justifyt-center justify-center mb-6">
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
