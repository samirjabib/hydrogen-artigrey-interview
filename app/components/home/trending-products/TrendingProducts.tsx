import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import {ProductCard} from '../../ui/product-card/ProductCard';
import {cn} from '~/utils/cn';
import {CollectionByHandleQuery} from 'storefrontapi.generated';

type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  isSubscriptionProduct?: boolean;
  badge?: string;
  rating: number;
  tags: string[];
};

type ProductSliderProps = {
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({
  trendingProducts,
}) => {
  const products = trendingProducts?.products.edges;
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-20 bg-[#F6F6F5] px-4 md:px-[10px]">
      <div className="container mx-auto">
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
          {products?.map((item) => {
            const id = item.node.id;
            const product = item.node;

            console.log(item);
            // const description = item.node.description
            const isSubscriptionProduct = false;
            return (
              <SwiperSlide key={id} className="h-auto">
                <ProductCard isSubscriptionProduct={isSubscriptionProduct} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
