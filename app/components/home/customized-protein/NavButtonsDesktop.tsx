import {forwardRef} from 'react';
import {SwiperNavButton} from '../../ui/SwiperNavButton';
import type {NavButtonsProps} from './types';

export const NavButtonsDesktop = forwardRef(
  ({isBeginning, isEnd, swiperRef}: NavButtonsProps) => {
    return (
      <div className="hidden md:flex">
        <SwiperNavButton
          direction="prev"
          onClick={() => swiperRef?.current.slidePrev()}
          className={`absolute left-12 top-1/2 -translate-y-1/2 z-10 ${
            isBeginning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isBeginning}
        />
        <SwiperNavButton
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute right-12 top-1/2 -translate-y-1/2 z-10 ${
            isEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isEnd}
        />
      </div>
    );
  },
);
