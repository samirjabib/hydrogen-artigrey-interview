import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../product-card/ProductCard';
import { useProductSlider } from './useProductSlider';
import { ProductSliderHeader } from './ProductSliderHeader';
import { ProductSliderProps, SWIPER_BREAKPOINTS } from './types';


/**
 * A component that renders a product slider for a given set of products.
 *
 * @example
 * <ProductSlider
 *   products={products}
 *   title="Trending products"
 *   subtitle="Check out our latest products"
 *   showViewAll
 *   viewAllLink="/trending"
 *   viewAllText="See all trending products"
 * />
 *
 * @param {object} props The component props.
 * @param {Array} props.products The array of products to render.
 * @param {string} [props.title] The title of the product slider.
 * @param {string} [props.subtitle] The subtitle of the product slider.
 * @param {boolean} [props.showViewAll] Indicates if the "View All" button should be shown.
 * @param {string} [props.viewAllLink] The link of the "View All" button.
 * @param {string} [props.viewAllText] The text of the "View All" button.
 * @param {string} [props.headerVariant] The variant of the header to use. Can be either 'swiper' or 'default'.
 * @param {number[]} [props.bestSellerIndices] The indices of the products that should be highlighted as best sellers.
 * @param {object} [props.selectedItem] The selected item from the navigation menu.
 * @param {function} [props.onSelectItem] The function to call when an item from the navigation menu is selected.
 *
 * @returns {React.ReactElement} The product slider component.
 */
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
        {enrichedProducts.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard product={product} variant={variant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};