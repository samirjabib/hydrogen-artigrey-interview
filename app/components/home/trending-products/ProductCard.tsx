import {Image} from '@shopify/hydrogen';
import {SwiperSlide} from 'swiper/react';

export const ProductCard = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center">
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/whey-protein-isolate.png?v=1731971707"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};
