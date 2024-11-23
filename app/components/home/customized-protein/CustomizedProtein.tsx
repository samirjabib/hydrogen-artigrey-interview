import 'swiper/css';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCardProtein } from './components/product-card/ProductCard';
import { NavButtonsDesktop } from './components/NavButtonsDesktop';
import { NavButtonsMobile } from './components/NavButtonsMobile';
import { Heading } from '~/components/design-system/Heading';
import { products } from './constants';
import { SwiperType } from '~/types';
import { SwiperOptions } from 'swiper/types';


export const CustomizedProtein: React.FC = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
  };

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="container mx-auto">
        <Heading
          title="Customized Protein Powder"
          subtitle="Simple & Effective Ingredients"
          className="mb-[54px] text-center"
        />

        <NavButtonsMobile
          swiperRef={swiperRef}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />

        <Swiper
          {...swiperConfig}
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
              <ProductCardProtein product={product} />
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
