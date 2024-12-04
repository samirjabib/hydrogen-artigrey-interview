import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../product-card/ProductCard';
import { useProductSlider } from './useProductSlider';
import { ProductSliderHeader } from './ProductSliderHeader';
import { ProductSliderProps, SWIPER_BREAKPOINTS } from './types';
import { ProductCardSkeleton } from '../product-card/ProductCardSkeleton';


export const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  title,
  subtitle,
  variant = 'default',
  showViewAll = false,
  viewAllLink = '/',
  viewAllText = 'View All',
  headerVariant = 'swiper',
  bestSellerIndices = [0, 3],
  selectedItem,
  onSelectItem,
  isLoading
}) => {
  const {
    isBeginning,
    isEnd,
    swiperRef,
    enrichedProducts,
    handleSwiperInit,
    handleSlideChange
  } = useProductSlider({ products, bestSellerIndices });


  return (
    <div className="w-full">
      <ProductSliderHeader
        title={title}
        subtitle={subtitle}
        showViewAll={showViewAll}
        viewAllLink={viewAllLink}
        viewAllText={viewAllText}
        headerVariant={headerVariant}
        swiperRef={swiperRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
        selectedItem={selectedItem}
        onSelectItem={onSelectItem}
      />
      <Swiper
        spaceBetween={10}
        onSwiper={handleSwiperInit}
        breakpoints={SWIPER_BREAKPOINTS}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={`skeleton-${index}`} className="h-auto">
              <ProductCardSkeleton variant={variant} />
            </SwiperSlide>
          ))
        ) : (
          enrichedProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} variant={variant} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};