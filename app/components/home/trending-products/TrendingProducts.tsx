import 'swiper/css';

import React from 'react';
import type { CollectionByHandleQuery } from 'storefrontapi.generated';
import { ProductSlider } from '~/components/design-system/ProductSlider';

export type ProductSliderProps = {
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({
  trendingProducts,
}) => {
  if (!trendingProducts?.products?.edges) {
    return <div>No products available</div>;
  }

  return (
    <section className="py-20 bg-[#F6F6F5]">
      <div className="wrapper px-4 md:px-10">
        <ProductSlider
          products={trendingProducts.products.edges}
          title="Trending Supplements"
          subtitle="🌟 Trending"
          variant="default"
          headerVariant="swiper"
        />
      </div>
    </section>
  );
};
