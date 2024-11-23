import { forwardRef } from 'react';
import { SwiperNavButton } from '~/components/design-system/SwiperNavButton';
import { SwiperControlsProps } from '../types';


export const SwiperControls = forwardRef(
  ({
    swiperRef,
    isBeginning,
    isEnd,
  }: SwiperControlsProps) => (
    <div className="flex flex-row items-center gap-4">
      <SwiperNavButton
        direction="prev"
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <SwiperNavButton
        direction="next"
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  ),
);
