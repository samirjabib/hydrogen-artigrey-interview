import 'swiper/css';

import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import {ProductCard} from '../../ui/product-card/ProductCard';
import type {
  CollectionByHandleQuery,
  CollectionProductFragment,
} from 'storefrontapi.generated';

type ProductSliderProps = {
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({
  trendingProducts,
}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!trendingProducts?.products?.edges) {
    return <div>No products available</div>;
  }

  const products = trendingProducts.products.edges;

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="wrapper px-4 md:px-10">
        <HeadingSwiper
          isBeginning={isBeginning}
          isEnd={isEnd}
          title="Trending Supplements"
          swiperRef={swiperRef}
          subtitle="🌟 Trending"
          className="mb-12"
        />

        <Swiper
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            375: {spaceBetween: 10, slidesPerView: 1},
            800: {spaceBetween: 20, slidesPerView: 2},
            1280: {spaceBetween: 20, slidesPerView: 4},
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-full"
        >
          {products.map((item) => {
            const product = item.node as unknown as CollectionProductFragment;

            return (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
