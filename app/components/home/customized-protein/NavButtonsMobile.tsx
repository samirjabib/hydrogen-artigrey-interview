import {forwardRef} from 'react';
import {SwiperNavButton} from './SwiperNavButton';

export const NavButtonsMobile = forwardRef(
  ({
    isBeginning,
    isEnd,
    swiperRef,
  }: {
    isBeginning: boolean;
    isEnd: boolean;
    swiperRef: any;
  }) => {
    return (
      <div className="md:hidden flex flex-row items-center gap-2 justifyt-center justify-center mb-6">
        <SwiperNavButton
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
          className={`z-10 ${
            isBeginning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isBeginning}
        />
        <SwiperNavButton
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
          className={`z-10 ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isEnd}
        />
      </div>
    );
  },
);
