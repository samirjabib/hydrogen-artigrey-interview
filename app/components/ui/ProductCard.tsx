import {Image} from '@shopify/hydrogen';
import {SwiperSlide} from 'swiper/react';
import {Tag} from './Tag';
import {StarsRating} from './StarRatings';
import {Button} from './Button';

/**
 * Renders a product card.
 *
 * @remarks
 * This component renders a product card with a title, tags, a description, and a rating.
 * The content is mocked, but this component will be replaced with dynamic content
 * from the store in the future.
 *
 * @example
 * <ProductCard />
 */
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
      <div className="px-5">
        <div className="flex flex-row gap-1 items-center pb-4">
          {mockTags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <h3 className="text font-medium text-[#1B1F23]">
          Magnesium L-Threonate
        </h3>
        <p className="text-[13px] leading-4 text-[#1B1F23B2] mb-2">
          Enhances the quality of sleep
        </p>
        <div className="flex flex-row items-center justify-between pb-5">
          <StarsRating isProductRating />
          <Button className="font-medium text-[13px] py-[5px] px-4 inline-flex">
            Add • $49.95
          </Button>
        </div>
      </div>
    </div>
  );
};
