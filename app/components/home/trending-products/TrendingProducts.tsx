import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import {ProductCard} from '../../ui/ProductCard';

export const products = [
  {
    id: '1',
    image: 'https://via.placeholder.com/300x400',
    title: 'Omega-3',
    description: 'Supports heart & brain health',
    price: '$49.95',
    badge: 'Bestseller',
    rating: 5,
    tags: ['One-Time', 'Subscription'],
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
];

type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  rating: number;
  tags: string[];
};

type ProductSliderProps = {
  products: Product[];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({products}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="container mx-auto">
        <HeadingSwiper
          isBeginning={isBeginning}
          isEnd={isEnd}
          title="Trending Supplements"
          swiperRef={swiperRef}
          subtitle="COMFORTABLY UNCOMFORTABLE"
          className="mb-12"
        />

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {slidesPerView: 1.5},
            1024: {slidesPerView: 3},
            1280: {slidesPerView: 4},
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
