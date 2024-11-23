import 'swiper/css';
import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { CollectionProductFragment } from 'storefrontapi.generated';
import { ProductCard } from './product-card/ProductCard';
import { HeadingSwiper } from './HeadingSwiper';
import { Heading } from './Heading';
import { SwiperNavButton } from './SwiperNavButton';
import { NavLink } from '@remix-run/react';

export interface ProductSliderProps {
  products: Array<{ node: CollectionProductFragment }>;
  title: string;
  subtitle: string;
  variant?: 'default' | 'gray';
  showViewAll?: boolean;
  viewAllLink?: string;
  viewAllText?: string;
  headerVariant?: 'swiper' | 'default';
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  title,
  subtitle,
  variant = 'default',
  showViewAll = false,
  viewAllLink = '/',
  viewAllText = 'View All',
  headerVariant = 'swiper',
}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const renderHeader = () => {
    if (headerVariant === 'swiper') {
      return (
        <HeadingSwiper
          isEnd={isEnd}
          isBeginning={isBeginning}
          title={title}
          swiperRef={swiperRef}
          subtitle={subtitle}
          className="mb-12"
        />
      );
    }

    return (
      <div className="flex flex-col md:pb-[50px] md:flex-row items-center justify-between w-full">
        <Heading subtitle={subtitle} title={title} />
        {showViewAll && (
          <div className="flex flex-col md:flex-row items-center gap-6 pb-8 md:pb-0">
            <NavLink
              to={viewAllLink}
              className="text-lg underline leading-5 font-normal text-[#1B1F23]"
            >
              {viewAllText}
            </NavLink>
            <div className="flex flex-row items-center gap-4">
              <SwiperNavButton
                disabled={isBeginning}
                direction="prev"
                onClick={() => swiperRef.current?.slidePrev()}
              />
              <SwiperNavButton
                disabled={isEnd}
                direction="next"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      {renderHeader()}

      <Swiper
        spaceBetween={10}
        onSwiper={handleSwiperInit}
        breakpoints={{
          375: { spaceBetween: 10, slidesPerView: 1 },
          500: { spaceBetween: 10, slidesPerView: 2 },
          800: { spaceBetween: 20, slidesPerView: 3 },
          1400: { spaceBetween: 20, slidesPerView: 4 },
        }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {products.map((item, index) => {
          const product = {
            ...(item.node as unknown as CollectionProductFragment),
            isBestSeller: index === 0 || index === 3,
          };

          return (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} variant={variant} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
