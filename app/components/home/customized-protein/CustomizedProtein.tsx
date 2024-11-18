import 'swiper/css';

import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {ProductCard} from './product-card/ProductCard';
import {NavButtonsDesktop} from './NavButtonsDesktop';
import {NavButtonsMobile} from './NavButtonsMobile';
import {Heading} from '~/components/ui/Heading';
import {products} from './constants';

export type SwiperType = any | null;

export const CustomizedProtein: React.FC = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
