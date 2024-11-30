import 'swiper/css';
import 'swiper/css/navigation';

import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { VideosSwiperQuery } from 'storefrontapi.generated';
import { useVideoProcessing } from './hooks/useVideoProcessing';
import { useIntersectionVisibility } from './hooks/useIntersectionVisibility';
import { HeadingSwiper } from '~/components/design-system/HeadingSwiper';
import VideoSlideContent from './components/VideoSlideContent';
import { VideoSliceProductCard } from './components/VideoSliceProductCard';
import { SwiperType } from '~/types';
import { useQuickViewStore } from '~/components/product/product-quick-view/quickViewStore';
import { useCartStore } from '~/components/cart/components/cartStore';
import { useSwiper } from '~/hooks/useSwiper';

export const VideoSwiper: React.FC<{
  videoSwiper: VideosSwiperQuery['metaobjects'];
}> = ({ videoSwiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { containerRef, isVisible } = useIntersectionVisibility();
  const { videosUrl, middleIndex, product } = useVideoProcessing(videoSwiper);
  const isOpenQuickView = useQuickViewStore((state) => state.isOpen);
  const isOpenCart = useCartStore((state) => state.isOpen);

  const { swiperRef, isBeginning, isEnd, handleSwiperInit } = useSwiper();


  const handleSlideChange = useCallback((swiper: SwiperType) => {
    if (!swiper) return;
    setActiveIndex(swiper.realIndex);
  }, []);

  if (!videosUrl.length || !product) return null;

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
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        initialSlide={middleIndex}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView="auto"
        className="w-full h-auto !pt-16"
        role="region"
        aria-label="Video Swiper"
      >
        {videosUrl.map((video, index) => {
          const isActive = activeIndex === index;
          const shouldPlay = isVisible && isActive && !isOpenQuickView && !isOpenCart;


          return (
            <SwiperSlide
              key={video.id}
              className={`transition-[position] duration-200 ease-in-out ${isActive ? 'relative bottom-10 z-10' : 'relative z-0'
                }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Video ${index + 1}`}
              style={{
                width: '300px',
              }}
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
                productHandle={product.productHandle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};