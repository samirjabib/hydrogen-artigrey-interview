import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {CustomizedProteinHeader} from './CuztomizedProteinHeader';
import {ProductCard} from './product-card/ProductCard';
import type {ProductProps} from './types';
import {NavButtonsDesktop} from './NavButtonsDesktop';
import {NavButtonsMobile} from './NavButtonsMobile';

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

        <NavButtonsMobile
          swiperRef={swiperRef}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />

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


          <NavButtonsDesktop
            swiperRef={swiperRef}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        </Swiper>
      </div>
    </section>
  );
};
