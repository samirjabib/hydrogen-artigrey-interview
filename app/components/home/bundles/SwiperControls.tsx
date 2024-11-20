import {forwardRef} from 'react';
import {SwiperNavButton} from '~/components/ui/SwiperNavButton';

export const SwiperControls = forwardRef(
  ({
    swiperRef,
    isBeginning,
    isEnd,
  }: {
    swiperRef: React.RefObject<any>;
    isBeginning: boolean;
    isEnd: boolean;
  }) => (
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
