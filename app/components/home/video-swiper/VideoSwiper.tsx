import 'swiper/css';
import 'swiper/css/navigation';
import React, { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';



import { HeadingSwiper } from '~/components/design-system/HeadingSwiper';
import { VideoSliceProductCard } from './components/VideoSlideInfo';
import VideoSlideContent from './components/VideoSlideContent';
import { useVideoProcessing } from './hooks/useVideoProcessing';
import { useIntersectionVisibility } from './hooks/useIntersectionVisibility';
import { VideoSwiperProps } from './types';


export const VideoSwiper: React.FC<VideoSwiperProps> = ({ videoSwiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any | null>(null);
  const { containerRef, isVisible } = useIntersectionVisibility();
  const { videosUrl, middleIndex, product } = useVideoProcessing(videoSwiper);

  const handleSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.realIndex);
  }, []);
  if (!videosUrl.length || !product) return null;

  const swiperConfig: SwiperOptions = {
    initialSlide: middleIndex,
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
  };

  const isEnd = swiperRef.current ? swiperRef.current.isEnd : false;
  const isBeginning = swiperRef.current ? swiperRef.current.isBeginning : true;

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center h-[1050px] md:h-[923px] bg-[#F6F6F5]"
    >
      <HeadingSwiper
        title="Real People. Real Results."
        subtitle="Trusted & Proven by Science"
        className="pt-14"
        swiperRef={swiperRef}
        isEnd={isEnd}
        isBeginning={isBeginning}
      />
      <Swiper
        {...swiperConfig}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className="w-full h-auto !pt-16"
        role="region"
        aria-label="Video Swiper"
      >
        {videosUrl.map((video, index) => {
          const isActive = activeIndex === index;
          const shouldPlay = isVisible && isActive;

          return (
            <SwiperSlide
              key={video.id}
              className={`transition-[position] w-[300px] duration-200 ease-in-out ${isActive ? 'relative bottom-10 z-10' : 'relative z-0'
                }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Video ${index + 1}`}
            >
              <VideoSlideContent
                videoUrl={video.url}
                isActive={isActive}
                shouldPlay={shouldPlay}
              />
              <VideoSliceProductCard
                imageSrc={product.image}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
