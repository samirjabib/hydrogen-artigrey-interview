import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {CustomizedProteinHeader} from './CuztomizedProteinHeader';
import {ProductCard} from './product-card/ProductCard';
import type {ProductProps} from './types';
import {SwiperNavButton} from './SwiperNavButton';

export const products: ProductProps[] = [
  {
    id: '1',
    image:
      'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/slider-suplements.png?v=1731949435',
  },
  {
    id: '2',
    image:
      'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/slider-suplements.png?v=1731949435',
  },
];

export const CustomizedProtein: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="container mx-auto">
        <CustomizedProteinHeader />

        {/* Slider navigation buttons mobile */}
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

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-full relative"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

          {/* Slider navigation buttons desktop */}

          <div className="hidden md:flex">
            <SwiperNavButton
              direction="prev"
              onClick={() => swiperRef.current?.slidePrev()}
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
        </Swiper>
      </div>
    </section>
  );
};
