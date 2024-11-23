import 'swiper/css';

import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingSwiper } from '~/components/design-system/HeadingSwiper';
import type {
  CollectionByHandleQuery,
  CollectionProductFragment,
} from 'storefrontapi.generated';
import { ProductCard } from '~/components/design-system/product-card/ProductCard';

export type ProductSliderProps = {
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({
  trendingProducts,
}) => {
  console.log('render')
  const swiperRef = useRef<any>(null);
  /*   const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false); */

  if (!trendingProducts?.products?.edges) {
    return <div>No products available</div>;
  }

  const handleSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);
  /*   
      const handleSlideChange = useCallback((swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }, []);
     */
  const products = trendingProducts.products.edges;

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="wrapper px-4 md:px-10">
        {/*    <HeadingSwiper
          isEnd={isEnd}
          isBeginning={isBeginning}
          title="Trending Supplements"
          swiperRef={swiperRef}
          subtitle="🌟 Trending"
          className="mb-12"
        /> */}

        <Swiper
          spaceBetween={10}
          onSwiper={handleSwiperInit}
          breakpoints={{
            375: { spaceBetween: 10, slidesPerView: 1 },
            500: { spaceBetween: 10, slidesPerView: 2 },
            800: { spaceBetween: 20, slidesPerView: 3 },
            1280: { spaceBetween: 20, slidesPerView: 4 },
          }}
/*           onSlideChange={handleSlideChange}
 */          className="w-full"
        >
          {products.map((item) => {
            const product = item.node as unknown as CollectionProductFragment;

            return (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} variant="default" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
