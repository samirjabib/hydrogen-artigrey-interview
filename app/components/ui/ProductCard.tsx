import {Image} from '@shopify/hydrogen';
import {SwiperSlide} from 'swiper/react';
import {Tag} from './Tag';

export const ProductCard = () => {
  const mockTags = ['GMO-Free', 'Gluten Free'];
  return (
    <div className="bg-white rounded-lg pt-8">
      <div className="flex items-center justify-center pb-11">
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/whey-protein-isolate.png?v=1731971707"
          height={300}
          width={300}
        />
      </div>
      {/* tags */}
      <div className="px-5">
        <div className="flex flex-row gap-1 items-center">
          {mockTags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
